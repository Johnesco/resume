/**
 * Main application script - Renders the styled resume
 * Dependencies: resume-utils.js, resumeJSON.js
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the resume
    if (typeof resumeJSON !== 'undefined') {
        renderResume();
    } else {
        console.error('resumeJSON not found');
        document.querySelector('.professional-summary').textContent =
            'Error loading resume data. Please enable JavaScript and refresh.';
    }
});

/**
 * Update the plain text link to preserve query parameters
 */
function updatePlainTextLink() {
    const link = document.getElementById('plaintext-link');
    if (!link) return;

    const currentSearch = window.location.search;
    link.href = 'plaintextresume.html' + currentSearch;
}

/**
 * Escape a string for safe insertion as HTML text
 */
function escapeHTML(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Main render function - applies filters and renders all sections
 */
function renderResume() {
    const { filteredSkills, recentJobs, earlierJobs, skillsFormat } = applyFilters(resumeJSON);

    const label = getLabel(resumeJSON);
    document.title = `${resumeJSON.basics.name} - ${label}`;

    document.querySelector('.resume-name').textContent = resumeJSON.basics.name;
    document.querySelector('.resume-title').textContent = label;
    document.querySelector('.professional-summary').innerHTML =
        `<strong>Summary: </strong>${escapeHTML(getSummary(resumeJSON))}`;

    // Contact info as real links so screen readers announce them as email/phone,
    // and keyboard/AT users can activate them directly.
    const email = resumeJSON.basics.email;
    const phone = resumeJSON.basics.phone;
    const telHref = phone ? phone.replace(/[^\d+]/g, '') : '';
    const city = resumeJSON.basics.location.city;
    const region = resumeJSON.basics.location.region;
    const contactHTML = `
        <a href="mailto:${escapeHTML(email)}" aria-label="Email John Escobedo at ${escapeHTML(email)}">${escapeHTML(email)}</a><br>
        <a href="tel:${escapeHTML(telHref)}" aria-label="Call ${escapeHTML(phone)}">${escapeHTML(phone)}</a><br>
        <span aria-label="Location: ${escapeHTML(city)}, ${escapeHTML(region)}">${escapeHTML(city)}, ${escapeHTML(region)}</span>
    `;
    const contactEl = document.querySelector('.contact-info');
    // <address> can only contain a <p> per our template; replace its inner content
    const contactP = contactEl.querySelector('p') || contactEl;
    contactP.innerHTML = contactHTML;

    const skillsEl = document.getElementById('skillSets');
    if (skillsFormat === 'list') {
        skillsEl.innerHTML = renderSkillsList(filteredSkills);
    } else {
        skillsEl.innerHTML = renderSkills(filteredSkills);
    }
    skillsEl.setAttribute('aria-busy', 'false');

    const jobsEl = document.getElementById('jobs');
    jobsEl.innerHTML = renderWorkExperience(recentJobs);
    jobsEl.setAttribute('aria-busy', 'false');

    const earlierSection = document.getElementById('earlier-experience-section');
    if (earlierSection) {
        if (earlierJobs.length > 0) {
            earlierSection.innerHTML = renderEarlierExperience(earlierJobs);
            earlierSection.hidden = false;
        } else {
            earlierSection.innerHTML = '';
            earlierSection.hidden = true;
        }
    }

    document.getElementById('schools').innerHTML = renderEducation(resumeJSON.education);

    updatePlainTextLink();
}

/**
 * Render skills section (pill/tag format - default)
 * Uses a real <ul> so screen readers announce "list of N items"
 */
function renderSkills(skills) {
    if (!skills || skills.length === 0) return '';

    return skills.map((skill, i) => {
        const limit = skill.keywordLimit !== undefined ? skill.keywordLimit : 6;
        const limitedKeywords = limit > 0 ? skill.keywords.slice(0, limit) : skill.keywords;
        const nameId = `skillset-${i}-name`;
        const tags = limitedKeywords.map(kw =>
            `<li class="skill-tag">${escapeHTML(kw)}</li>`
        ).join('');

        const levelBadge = skill.level
            ? ` <span class="skill-level" aria-label="Proficiency: ${escapeHTML(skill.level)}">${escapeHTML(skill.level)}</span>`
            : '';

        return `
            <div class="skillset">
                <p id="${nameId}"><strong>${escapeHTML(skill.name)}</strong>${levelBadge}</p>
                <ul class="skill-tags" role="list" aria-labelledby="${nameId}">${tags}</ul>
            </div>
        `;
    }).join('');
}

/**
 * Render skills section in ATS-friendly list format
 * Single column, comma-separated keywords, ~4 keywords per category
 * @param {Array} skills - Filtered skills array
 * @returns {string} HTML string
 */
function renderSkillsList(skills) {
    if (!skills || skills.length === 0) return '';

    const items = skills.map(skill => {
        const limit = skill.keywordLimit !== undefined ? skill.keywordLimit : 4;
        const limitedKeywords = limit > 0 ? skill.keywords.slice(0, limit) : skill.keywords;
        const keywordList = limitedKeywords.map(escapeHTML).join(', ');

        return `
            <li class="skillset-list">
                <strong>${escapeHTML(skill.name)}:</strong> ${keywordList}
            </li>
        `;
    }).join('');

    return `<ul class="skillset-list-group" role="list">${items}</ul>`;
}

/**
 * Render earlier experience section (condensed one-liners, expandable on click)
 * @param {Array} jobs - Array of earlier job entries
 * @returns {string} HTML string with section header and job list
 */
function renderEarlierExperience(jobs) {
    if (!jobs || jobs.length === 0) return '';

    const jobLines = jobs.map((job, index) => {
        const startYear = job.startDate ? job.startDate.split('-')[0] : '';
        const endYear = job.endDate ? job.endDate.split('-')[0] : 'Present';
        const dateRange = startYear ? `(${escapeHTML(startYear)}–${escapeHTML(endYear)})` : '';
        const dateSR = startYear ? `${startYear} to ${endYear}` : '';

        const panelId = `earlier-panel-${index}`;
        const buttonId = `earlier-button-${index}`;

        let highlightsHTML = '';
        if (job.highlights && job.highlights.length > 0) {
            const items = job.highlights.map(h => {
                const cleaned = h.charAt(0) === ' ' ? h.substring(1) : h;
                return `<li>${escapeHTML(cleaned)}</li>`;
            }).join('');
            highlightsHTML = `<ul>${items}</ul>`;
        }

        const accessibleName = `${job.position}, ${job.name}${dateSR ? ', ' + dateSR : ''}`;

        return `
            <li class="earlier-job">
                <button type="button"
                        class="earlier-job-toggle"
                        id="${buttonId}"
                        aria-expanded="false"
                        aria-controls="${panelId}"
                        aria-label="${escapeHTML(accessibleName)}. Show details.">
                    <span class="earlier-job-header" aria-hidden="true">
                        <span class="earlier-position"><span class="earlier-expand-icon">+</span>${escapeHTML(job.position)}</span>
                        <span class="earlier-company">${escapeHTML(job.name)}</span>
                        <span class="earlier-dates">${dateRange}</span>
                    </span>
                </button>
                <div class="earlier-job-details"
                     id="${panelId}"
                     role="region"
                     aria-labelledby="${buttonId}">
                    <div class="earlier-job-details-inner">
                        ${job.summary ? `<p class="earlier-summary">${escapeHTML(job.summary)}</p>` : ''}
                        ${highlightsHTML ? `<div class="earlier-highlights">${highlightsHTML}</div>` : ''}
                    </div>
                </div>
            </li>
        `;
    }).join('');

    return `
        <h2 id="earlier-heading">Additional Experience</h2>
        <ul class="earlier-jobs-list" role="list">
            ${jobLines}
        </ul>
    `;
}

/**
 * Toggle expanded state — bound after render; button owns the state.
 */
function toggleEarlierJob(button) {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const next = !expanded;
    button.setAttribute('aria-expanded', String(next));
    const li = button.closest('.earlier-job');
    if (li) li.classList.toggle('expanded', next);
    const icon = button.querySelector('.earlier-expand-icon');
    if (icon) icon.textContent = next ? '−' : '+';
    // Update the accessible name so screen readers announce the next action.
    const currentLabel = button.getAttribute('aria-label') || '';
    const nextAction = next ? 'Hide details.' : 'Show details.';
    const withoutAction = currentLabel.replace(/(Show|Hide) details\.$/, '').trim();
    button.setAttribute('aria-label', `${withoutAction} ${nextAction}`);
}

// Event delegation - handles both click and keyboard (button gives us Enter/Space free)
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.earlier-job-toggle');
    if (btn) toggleEarlierJob(btn);
});

/**
 * Render work experience section
 * @param {Array} work - Filtered work array
 * @returns {string} HTML string
 */
function renderWorkExperience(work) {
    if (!work || work.length === 0) return '';

    return work.map((job, i) => {
        const startDate = formatDate(job.startDate);
        const endDate = job.endDate ? formatDate(job.endDate) : 'Present';
        const startISO = job.startDate || '';
        const endISO = job.endDate || '';

        const highlightGroups = [];
        let currentGroup = [];

        if (job.highlights && job.highlights.length > 0) {
            job.highlights.forEach((highlight, index) => {
                const isNewGroupMarker = highlight.charAt(0) === ' ';
                const cleanedHighlight = isNewGroupMarker ? highlight.substring(1) : highlight;

                if (isNewGroupMarker && currentGroup.length > 0) {
                    highlightGroups.push([...currentGroup]);
                    currentGroup = [];
                }

                currentGroup.push(cleanedHighlight);

                if (index === job.highlights.length - 1 && currentGroup.length > 0) {
                    highlightGroups.push([...currentGroup]);
                }
            });
        }

        const highlightsHTML = highlightGroups.map(group =>
            `<ul>${group.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`
        ).join('');

        const headingId = `job-${i}-heading`;
        const hasWebsite = job.website && job.website.trim() !== '';
        const companyMarkup = hasWebsite
            ? `<a href="${escapeHTML(job.website)}"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="${escapeHTML(job.name)} website, opens in a new tab">${escapeHTML(job.name)}<span class="visually-hidden"> (opens in a new tab)</span></a>`
            : escapeHTML(job.name);

        return `
            <article class="job" aria-labelledby="${headingId}">
                <div class="job-header">
                    <div>
                        <h3 class="job-position" id="${headingId}">${escapeHTML(job.position)}</h3>
                        <p class="job-company">
                            <span class="job-company-name">${companyMarkup}</span>
                            <span class="job-company-sep" aria-hidden="true"> | </span>
                            <span class="job-location">${escapeHTML(job.location)}</span>
                        </p>
                        <p class="job-date">
                            <time datetime="${escapeHTML(startISO)}">${escapeHTML(startDate)}</time>
                            <span> to </span>
                            ${endISO
                                ? `<time datetime="${escapeHTML(endISO)}">${escapeHTML(endDate)}</time>`
                                : `<span>${escapeHTML(endDate)}</span>`}
                        </p>
                    </div>
                </div>
                <div class="job-content">
                    <p class="job-summary">${escapeHTML(job.summary)}</p>
                    <div class="job-highlights">
                        ${highlightsHTML}
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/**
 * Render education section
 * @param {Array} education - Education array from resumeJSON
 * @returns {string} HTML string
 */
function renderEducation(education) {
    if (!education || education.length === 0) return '';

    return education.map(school => {
        const startDate = school.startDate || '';
        const endDate = school.endDate || '';
        const hasDates = !!(startDate || endDate);
        const dateSR = hasDates ? `${startDate || 'unknown'} to ${endDate || 'unknown'}` : '';
        const dateRange = hasDates
            ? `<span class="school-dates" aria-label="Attended ${escapeHTML(dateSR)}">${escapeHTML(startDate)} – ${escapeHTML(endDate)}</span>`
            : '';

        return `
            <div class="institution">
                <p class="school-title">${escapeHTML(school.institution)}</p>
                <p class="school-area">${escapeHTML(school.area)}</p>
                ${dateRange ? `<p>${dateRange}</p>` : ''}
            </div>
        `;
    }).join('');
}
