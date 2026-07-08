var resumeJSON = {
    // Role-specific summary variants for ATS optimization
    summaryVariants: {
        "qa-lead": "Senior QA and UAT lead with 18+ years making software work, and making it work for everyone. I build and lead quality and user-acceptance testing from the ground up, combining technical rigor (test strategy, API and platform testing, JIRA and TestRail, requirements-to-coverage traceability) with deep accessibility expertise (Section 508 and WCAG, hands-on JAWS and NVDA screen-reader validation) and AI-validation skills (LLM output validation, red-teaming, and hallucination detection). Equally central is the human side of quality: I advocate for the end user, communicate clearly with technical and business stakeholders, stay calm and supportive with people under pressure, and bring a trilingual perspective (English, Spanish, and ASL) shaped by years working alongside the Deaf and accessibility community. I test not only whether software functions, but whether it genuinely serves the people who depend on it.",
        "qa-ai": "Senior QA lead with 18+ years testing across healthcare, government, e-commerce, and emerging AI systems. Bringing traditional QA rigor to AI products through LLM output validation, red-teaming, prompt engineering, and hallucination detection, on a foundation of hands-on .NET/Java platform testing, SOAP/REST API testing via Postman, and daily JIRA/Confluence use. Trilingual (English, Spanish, ASL) with 508/WCAG accessibility experience including JAWS and NVDA validation.",
        "business-analyst": "Business Analyst with 18+ years ensuring what gets built matches what the business needs. I specialize in establishing quality foundations from zero—introducing release discipline, documentation standards, and structured validation to teams shipping without process. Career spans healthcare, government, and technology systems, with deep expertise in requirements documentation, process analysis, UAT coordination, and stakeholder communication. Experienced in gap analysis, change management, and enabling teams to catch defects locally instead of chasing emergencies in production. Trilingual communicator (English, Spanish, ASL) skilled at bridging technical and non-technical stakeholders.",
        "instructor": "Training and enablement professional with 20+ years developing people and processes across technical environments. Experience spans formal classroom instruction in digital media and software applications, embedded training in QA and healthcare IT, Agile coaching for distributed teams, and building onboarding programs that reduced ramp-up time. Skilled at breaking down complex technical concepts for diverse audiences, from adult learners in workshop settings to cross-functional engineering teams. Trilingual communicator (English, Spanish, ASL) with a track record of mentoring individuals, standardizing processes, and creating documentation that scales beyond any single team member.",
        "cs": "Customer service professional with 20+ years delivering empathetic, high-touch support across gaming, healthcare, government, and live event environments. Career anchored by frontline support roles at Blizzard Entertainment and Linden Lab, where I de-escalated emotionally charged user conflicts, restored compromised accounts, and resolved complex issues through patient listening and clear communication. That service mindset carried into UAT leadership, stakeholder advocacy, and user research across VA healthcare, Deaf accessibility, and HIPAA-regulated platforms, championing end-user needs so shipped products genuinely serve the people they're built for. Trilingual communicator (English, Spanish, ASL) with proven ability to build rapport with diverse audiences in person, by phone, via live chat, and through ticket systems."
    },
    // Role-specific title/label variants for ATS optimization
    labelVariants: {
        "default": "Senior QA & UAT Lead | Accessibility (508/WCAG) & AI Output Validation | User-Centered, Trilingual Quality",
        "qa-lead": "Senior QA & UAT Test Lead | Accessibility (508/WCAG) & User-Centered Testing | Healthcare & Government Systems",
        "qa-ai": "Senior QA Lead | AI Validation & LLM Output QA | Accessibility (508/WCAG) & User-Centered Testing",
        "business-analyst": "Business Analyst | Requirements & Stakeholder Management | Healthcare & Government Systems",
        "instructor": "Training & Enablement Specialist | Knowledge Transfer | Technical Mentoring",
        "cs": "Customer Service Specialist | De-escalation & Account Recovery | Trilingual (English/Spanish/ASL)"
    },
    basics: {
        name: "John Escobedo",
        label: "Senior QA & UAT Lead | Accessibility (508/WCAG) & AI Output Validation | User-Centered, Trilingual Quality",
        picture: "",
        email: "john.esco.work@gmail.com",
        phone: "(512) 299-3269",
        website: "",
        summary:
            "Senior QA and UAT lead with 18+ years making software work, and making it work for everyone. I build and lead quality and user-acceptance testing from the ground up, combining technical rigor (test strategy, API and platform testing, JIRA and TestRail, requirements-to-coverage traceability) with deep accessibility expertise (Section 508 and WCAG, hands-on JAWS and NVDA screen-reader validation) and AI-validation skills (LLM output validation, red-teaming, and hallucination detection). Equally central is the human side of quality: I advocate for the end user, communicate clearly with technical and business stakeholders, stay calm and supportive with people under pressure, and bring a trilingual perspective (English, Spanish, and ASL) shaped by years working alongside the Deaf and accessibility community. I test not only whether software functions, but whether it genuinely serves the people who depend on it.",
        location: {
            city: "Austin",
            region: "Texas"
        },
        profiles: [
            {
                network: "LinkedIn",
                username: "johnesco",
                url: "https://www.linkedin.com/in/johnesco/"
            }
        ]
    },
    work: [
        {
            name: "Sharpee.net",
            location: "Austin, TX (Remote)",
            position: "Software Tester (Volunteer)",
            website: "https://sharpee.net/",
            startDate: "2026-03-01",
            summary:
                "Performed exploratory testing on a new web application, found silent-failure bugs that scripted tests missed, and contributed fixes and documentation directly to the codebase.",
            highlights: [
                "Ran end-to-end exploratory testing across browsers and platforms, validating full user workflows.",
                "Caught silent-failure bugs that scripted tests missed, including cases where the app returned blank responses with no error signal.",
                "Built a custom failure-report template so any reader, technical or not, could immediately see what broke."
            ],
            tags: ["qa-lead", "qa-ai", "customer-service"]
        },
        {
            name: "Freelance",
            location: "Austin, TX",
            position: "Karaoke Host",
            website: "https://www.karaokedirectory.com/",
            startDate: "2025-07-17",
            summary:
                "Hosted live karaoke events, running sound and software while managing the room and adapting the flow to the crowd.",
            highlights: [
                "Ran event flow and timing, adjusting live to audience requests and room energy.",
                "Juggled the song queue, timing, and room energy to keep the night moving.",
                "Handled sound systems, karaoke software, and on-the-fly troubleshooting so events ran without interruption.",
                "Kept the atmosphere welcoming so first-timers felt comfortable stepping up alongside regulars."
            ],
            tags: ["event-host", "customer-service"]
        },
        {
            name: "Apptronik (via Insight Global)",
            location: "Austin, TX",
            position: "Robot Tele-Operator",
            website: "https://apptronik.com/",
            startDate: "2025-07-01",
            endDate: "2025-09-11",
            summary:
                "Tested and documented humanoid robot behavior for Apptronik, writing procedures and bug reports engineering could act on directly.",
            highlights: [
                "Cut physical test setup time by 75% by standardizing the preparation pattern, giving data collection consistent, repeatable conditions.",
                "Turned observed robot behaviors into clear bug reports engineering could act on immediately.",
                "Wrote startup, shutdown, and emergency shutdown procedures for 2 robot models where none existed, cutting new-tester ramp-up time by roughly 50% and becoming the team standard."
            ],
            tags: ["qa-ai", "customer-service"]
        },
        {
            name: "GeekSI",
            location: "Tallahassee, FL",
            position: "Senior QA Test Lead | Quality Assurance Tester | Scrum Master",
            website: "https://www.geeksi.tech/",
            startDate: "2019-03-01",
            endDate: "2025-06-30",
            summary:
                "Led QA, UAT, and requirements analysis across multiple VA healthcare projects, drove Agile process adoption, and served as SME for complex clinical modules.",
            highlights: [
                "Became the go-to SME for the Traumatic Brain Injury module, running knowledge transfer sessions so cross-functional teams could navigate the clinical requirements.",
                "Drove the Waterfall-to-Agile transition, introducing code freeze and release-candidate practices that shifted teams from reactive firefighting to predictable delivery.",
                "Managed test cases, defects, requirements documentation, and project dashboards in JIRA and Confluence across 6+ years and multiple VA projects.",
                "Ran SOAP API testing on VA home loan .NET applications and REST API testing via Postman on Java healthcare modules, validating service queries, data contracts, and data integrity.",
                "Built and executed test strategies for VA clinical healthcare applications across .NET and Java, covering UAT, regression, integration, smoke, sanity, end-to-end, and 508 compliance.",
                "Led 508 compliance initiatives and performed hands-on JAWS and NVDA screen-reader validation on VA clinical interfaces, catching accessibility issues visual inspection misses.",
                "Partnered with automation engineers to validate Cucumber and Selenium scripts, catching requirement-to-execution gaps before tests went into rotation.",
                "Built requirements traceability documentation mapping every business need to test coverage across web, mainframe, and mobile."
            ],
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor", "customer-service"]
        },
        {
            name: "Freelance",
            location: "Austin, TX",
            position: "DJ",
            website: "https://wherecanwedance.com/artists/johnescobedo",
            startDate: "2011-01-01",
            endDate: "2012-04-30",
            summary:
                "DJed dance events across Austin, working with venues and matching music to each event's tone and crowd.",
            highlights: [
                "Built setlists for Danceversity, Dance International, and Synergy Dance Studio based on event style and audience preferences.",
                "Adapted to different in-house sound systems and venue quirks on the fly.",
                "Coordinated with event organizers to match music to the tone and timing of each event."
            ],
            tags: ["event-host", "customer-service"]
        },
        {
            name: "EverlyWell",
            location: "Austin, TX",
            position: "Senior QA Test Lead | Quality Assurance Tester",
            website: "https://www.everlywell.com/",
            startDate: "2018-06-05",
            endDate: "2018-10-01",
            summary:
                "Established QA processes and JIRA workflows from the ground up for a health tech startup's secure patient portal, partnering with engineering and product leadership on release validation.",
            highlights: [
                "As JIRA administrator, designed a unified workflow with custom issue types, permission schemes, notifications, and dashboards, giving engineering and product real-time visibility into release status.",
                "Defined the initial QA process and release validation criteria for a team shipping without formal quality gates, bringing predictability to a fast-moving startup.",
                "Assessed release risk and delivered go/no-go recommendations to product and engineering leadership, balancing speed to market with quality.",
                "Validated releases across major browsers and mobile devices, catching requirement gaps before production."
            ],
            tags: ["qa-lead", "qa-ai", "business-analyst", "customer-service"]
        },
        {
            name: "YouScience",
            location: "Austin, TX",
            position: "QA Test Lead | QA Analyst",
            website: "https://www.youscience.com",
            startDate: "2017-07-17",
            endDate: "2018-06-01",
            summary:
                "As sole QA, built quality processes and test infrastructure from zero for the flagship education assessment platform, earning trust with development and product teams.",
            highlights: [
                "Introduced foundational quality practices, including version control discipline, release candidates, and structured validation, to a team shipping without formal QA process, integrating quality as a respected part of the SDLC.",
                "Created end-to-end test and product documentation covering procedures, requirements traceability, verification standards, and feature release notes.",
                "Standardized user story and acceptance criteria templates, reducing ambiguity between developers and QA and speeding up delivery.",
                "Owned end-to-end validation for the flagship web application, gating every release across browsers and mobile platforms."
            ],
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor", "customer-service"]
        },
        {
            name: "Luna Data Solutions",
            location: "Austin, TX",
            position: "QA Tester | QA Analyst",
            website: "https://www.lunadatasolutions.com/",
            startDate: "2015-05-15",
            endDate: "2017-05-19",
            summary:
                "QA Analyst contracted to RetailMeNot, coordinating cross-team testing for high-visibility e-commerce launches and aligning test priorities with business needs.",
            highlights: [
                "Coordinated QA across multiple teams for the gift card feature launch supporting a $22M acquisition, aligning test priorities with leadership expectations.",
                "Built custom JavaScript tools to validate site-wide analytics implementation and data integrity across the product.",
                "Triaged live production issues under pressure, communicating status updates to leadership during outages.",
                "Partnered with developers to improve internal tooling and CI/CD workflow, contributing changes that increased team efficiency."
            ],
            tags: ["qa-lead", "qa-ai", "customer-service"]
        },
        {
            name: "Communication Services for the Deaf",
            location: "Austin, TX",
            position: "QA Test Lead | QA Analyst",
            website: "https://csd.org/",
            startDate: "2013-05-06",
            endDate: "2015-01-16",
            summary:
                "Built the QA function for a video interpreting platform serving Deaf and hard-of-hearing users, immersing in the community to shape testing around real user needs.",
            highlights: [
                "Learned American Sign Language and Deaf cultural norms to understand user needs firsthand, using that immersion as a user research approach that shaped requirements validation.",
                "Established the company's first-ever QA function, defining test procedures and quality benchmarks that caught non-functional code blocking release.",
                "Owned validation across web and mobile, from test planning through stakeholder reporting.",
                "Expanded test coverage to previously unreachable environments by implementing a VirtualBox-based cross-platform solution."
            ],
            tags: ["qa-lead", "qa-ai", "business-analyst", "customer-service"]
        },
        {
            name: "DocbookMD",
            position: "Lead QA Tester | Quality Assurance Tester",
            location: "Austin, TX",
            website: "https://www.docbookmd.com",
            startDate: "2012-07-16",
            endDate: "2013-04-18",
            summary:
                "Founded the QA function for a HIPAA-compliant healthcare messaging app, establishing regulatory-grade quality processes and validation strategy from zero.",
            highlights: [
                "Analyzed and documented HIPAA compliance requirements, ensuring the app met regulatory standards for secure transmission of patient health information.",
                "Built the initial test strategy and QA documentation from scratch, gating releases against both business and HIPAA compliance requirements.",
                "Ran functional, regression, and HIPAA compliance validation across all supported mobile devices, creatively simulating wifi outages to catch edge cases scripted testing misses."
            ],
            tags: ["qa-lead", "qa-ai", "instructor", "customer-service"]
        },
        {
            name: "Luna Data Solutions",
            position: "QA Test Lead | QA Tester",
            location: "Austin, TX",
            website: "https://www.lunadatasolutions.com/",
            startDate: "2011-08-01",
            endDate: "2012-04-16",
            summary:
                "Contracted as QA Tester at Heatwave Interactive and promoted to Test Lead, authoring test documentation and leading a team across multiple game titles.",
            highlights: [
                "Authored test plans and documentation for smoke and regression cycles, improving coverage and consistency.",
                "Led and mentored a team of testers, raising the bar on documentation quality and execution consistency.",
                "Ran daily validation of game builds for core functionality, gameplay mechanics, and UI integrity."
            ],
            tags: ["qa-lead", "qa-ai", "instructor"]
        },
        {
            name: "Kick Butt Coffee",
            location: "Austin, TX",
            position: "Event Coordinator and Host",
            website: "https://kickbuttcoffee.com/",
            startDate: "2011-01-01",
            endDate: "2012-04-30",
            summary:
                "Organized and ran weekly dance events, handling vendors, tech setup, and community promotion.",
            highlights: [
                "Ran weekly events, coordinating DJs, venue logistics, and crowd engagement.",
                "Set up audio and event tech to integrate with the venue's house sound system.",
                "Ran event promotion and community outreach through social media."
            ],
            tags: ["event-host", "customer-service"]
        },
        {
            name: "Blizzard Entertainment",
            location: "Austin, TX",
            position: "Game Master | Customer Experience & Trust Specialist",
            website: "https://www.blizzard.com",
            startDate: "2010-07-12",
            endDate: "2011-07-12",
            summary:
                "Delivered high-touch customer support for World of Warcraft, analyzing complex cases and documenting findings for development teams while maintaining user trust in a high-volume environment.",
            highlights: [
                "Analyzed and documented fraud and exploitation cases, delivering detailed root cause reports to development teams.",
                "De-escalated emotionally charged escalations through patient listening, restoring lost items and accounts and turning frustrated users into loyal ones.",
                "Delivered high-volume support via live chat and ticket systems, balancing efficiency with genuine care.",
                "Restored compromised accounts with precision, following strict security and data integrity protocols."
            ],
            tags: ["qa-lead", "qa-ai", "customer-service"]
        },
        {
            name: "Linden Lab",
            location: "San Francisco, CA (Remote)",
            position: "QA Analyst | Support Tools Developer | Community Operations",
            website: "https://www.lindenlab.com",
            startDate: "2007-03-26",
            endDate: "2010-06-09",
            summary:
                "Promoted three times from frontline support to QA Analyst, identifying operational gaps and building tools while establishing customer support processes.",
            highlights: [
                "Built custom diagnostic tools to address operational gaps identified in support workflows.",
                "Established customer support processes and documentation using the Parature ticket system and live chat.",
                "As QA Analyst, tested daily builds and documented complex issues for engineering handoff.",
                "Served as frontline First Responder, handling in-world emergencies, enforcing Terms of Service, and resolving user conflicts."
            ],
            tags: ["qa-lead", "qa-ai", "customer-service"]
        },
        {
            name: "Super Happy Fun Fun",
            location: "Austin, TX",
            position: "QA Tester",
            website: "https://www.facebook.com/SuperHappyFunFun/",
            startDate: "2006-11-01",
            endDate: "2007-02-03",
            summary:
                "Cross-platform compatibility testing for mobile games across 100+ device models, documenting platform-specific issues and building strategies for fragmented environments.",
            highlights: [
                "Ran functional and compatibility testing across 100+ unique device models, building strategies for efficient testing across fragmented hardware and software platforms.",
                "Tracked platform-specific bugs in Mantis with detailed analysis for developers.",
                "Maintained quality oversight from initial builds through production patches."
            ],
            tags: ["qa-lead", "qa-ai"]
        },
        {
            name: "Aspyr Media",
            location: "Austin, TX",
            position: "QA Test Lead, QA Game Tester",
            website: "https://www.aspyr.com",
            startDate: "2006-02-01",
            endDate: "2006-11-01",
            summary:
                "Handled QA for high-profile Mac game ports, authoring test documentation and partnering with development to isolate platform-specific issues.",
            highlights: [
                "Authored test protocols and documentation to guide the testing team and establish organized standards.",
                "Validated major titles including Call of Duty 2 and Civilization IV through functional, compatibility, and regression testing, partnering with developers to isolate Mac-specific issues for stable launches.",
                "Documented, tracked, and verified defects in JIRA and DevTrack with clear, actionable reports.",
                "Caught localization and UI text errors through exhaustive proofreading, improving the polish of shipped titles."
            ],
            tags: ["qa-lead", "qa-ai"]
        },
        {
            name: "LOC Consultants",
            location: "Austin, TX",
            position: "Executive Assistant",
            startDate: "2005-10-01",
            endDate: "2006-01-31",
            summary:
                "Bilingual administrative support for an architectural firm, coordinating executive schedules and serving as primary communication point for a diverse client base.",
            highlights: [
                "Delivered bilingual customer service in English and Spanish, handling high-volume communications and directing inquiries for a diverse client base.",
                "Managed the executive calendar, prioritizing scheduling conflicts."
            ],
            tags: ["administrative", "customer-service"]
        },
        {
            name: "GoDance Studios",
            location: "Austin, TX",
            position: "Receptionist",
            startDate: "2005-04-28",
            endDate: "2005-09-30",
            summary: "Front desk point of contact for a dance studio, handling customer interactions and administrative operations.",
            highlights: [
                "Handled customer check-ins and new student reservations, keeping the front desk running smoothly.",
                "Fielded inquiries from prospective students, explaining program details and booking reservations.",
                "Processed cash and card payments accurately."
            ],
            tags: ["administrative", "customer-service"]
        },
        {
            name: "Diva Productions",
            location: "Austin, TX",
            position: "Animator",
            startDate: "2004-11-15",
            endDate: "2005-04-22",
            summary: "Owned the full animation production pipeline for educational children's content, running projects from script through final delivery.",
            highlights: [
                "Ran end-to-end animation projects: writing scripts, building storyboards and animatics, and delivering final animations.",
                "Designed content to engage young audiences and reinforce learning objectives.",
                "Coordinated audio editing, syncing dialogue and sound to animated sequences.",
                "Maintained the studio's web presence and updates."
            ],
            tags: ["design", "instructor"]
        },
        {
            name: "UT Performing Arts Center",
            location: "Austin, TX",
            position: "Building Monitor",
            startDate: "2004-10-01",
            endDate: "2004-11-15",
            summary: "Provided security and access control for live performances at UT Performing Arts Center.",
            highlights: [
                "Monitored venue access points, balancing performer access with security requirements.",
                "Maintained audience safety during performances.",
                "Ran building safety checks to identify and address issues before they escalated."
            ],
            tags: ["security", "customer-service"]
        },
        {
            name: "El Dia Daily Newspaper (Cuatro Communications)",
            location: "Houston, TX",
            position: "Designer",
            startDate: "2004-05-20",
            endDate: "2004-08-20",
            summary: "Layout designer for a Spanish-language daily newspaper, working under daily deadline pressure to prepare content for publication.",
            highlights: [
                "Designed and laid out newspaper pages in QuarkXPress and Adobe InDesign, supporting a platform migration between the two.",
                "Edited headlines and adjusted layouts under daily deadline pressure.",
                "Worked entirely in Spanish within a bilingual newsroom."
            ],
            tags: ["design"]
        },
        {
            name: "Computer Discovery Center",
            location: "Houston, TX",
            position: "Digital Artist / Webmaster",
            startDate: "2002-07-01",
            endDate: "2004-06-30",
            summary: "Provided professional photo services and client consultation, turning customer requests into polished deliverables.",
            highlights: [
                "Consulted with customers to understand requirements and turn requests into polished final products.",
                "Performed detailed photo editing and restoration in Adobe Photoshop.",
                "Supported artists with Giclée printing workflows, meeting print quality standards."
            ],
            tags: ["design", "customer-service"]
        },
        {
            name: "Weddings Performed",
            location: "Houston, TX",
            position: "Minister / Web Master",
            startDate: "2002-07-01",
            endDate: "2003-07-31",
            summary: "Ordained wedding officiant performing bilingual ceremonies, gathering requirements from couples to craft personalized experiences.",
            highlights: [
                "Consulted with couples to understand their vision and craft customized ceremonies.",
                "Officiated ceremonies for diverse couples, delivering personalized services in English and Spanish.",
                "Tutored the business owner on web design so they could maintain their own website."
            ],
            tags: ["administrative", "customer-service"]
        },
        {
            name: "Adecco Temp Agency",
            location: "Houston, TX",
            position: "Temp Worker",
            startDate: "2002-10-01",
            endDate: "2003-12-31",
            summary: "Handled admin assignments across multiple client offices in document modernization and legal redlining.",
            highlights: [
                "Assisted businesses with document modernization and updates.",
                "Learned document redlining processes for legal review."
            ],
            tags: ["administrative"]
        },
        {
            name: "Wild Brain",
            location: "San Francisco, CA",
            position: "Intern",
            startDate: "2002-01-22",
            endDate: "2002-04-15",
            summary: "Interned at a professional animation studio, gaining production exposure while supporting operations.",
            highlights: [
                "Supported studio operations through office assistance and workspace organization.",
                "Got hands-on experience with digital coloring workflows for animated productions.",
                "Developed traditional animation skills on professional equipment."
            ],
            tags: ["design"]
        },
        {
            name: "Vista College",
            location: "Berkeley, CA",
            position: "Teaching Assistant",
            startDate: "2001-10-01",
            endDate: "2002-05-31",
            summary: "TA in a college design lab, tutoring students on Adobe applications and keeping workstations running for daily classes.",
            highlights: [
                "Tutored students in Adobe Photoshop, Illustrator, and other applications.",
                "Troubleshot lab workstations to keep them functional for class."
            ],
            tags: ["instructor"]
        },
        {
            name: "Management Strategies International",
            location: "Berkeley, CA",
            position: "Graphic Designer",
            startDate: "2001-11-01",
            endDate: "2002-02-28",
            summary: "Created graphics and visual assets for client deliverables, collaborating with the team to meet content and client requirements.",
            highlights: [
                "Designed graphics for client brochures and technical documentation.",
                "Produced print-ready assets meeting project specifications.",
                "Collaborated with the team to align designs with content and client requirements."
            ],
            tags: ["design"]
        },
        {
            name: "Adecco Northwest Division",
            location: "Emeryville, CA",
            position: "Temporary Administrative Assistant",
            startDate: "2001-02-01",
            endDate: "2001-11-30",
            summary: "Placed on multiple assignments across biotech (Chiron) and educational tech (Leap Frog).",
            highlights: [
                "Assisted Chiron with decommissioning and archiving materials for a research project.",
                "Supported Leap Frog product development, working with prototypes and creating educational quiz content."
            ],
            tags: ["administrative"]
        },
        {
            name: "DigitalThink.com",
            location: "San Francisco",
            position: "Contract Graphic Designer",
            startDate: "2000-07-01",
            endDate: "2000-10-31",
            summary: "Created visual assets for an eLearning platform, collaborating with course developers to communicate technical concepts visually.",
            highlights: [
                "Designed instructional graphics to support technical eLearning course content.",
                "Partnered with course developers to visually communicate complex concepts for online learners.",
                "Optimized images for web delivery."
            ],
            tags: ["design"]
        },
        {
            name: "Mediaplex",
            location: "San Francisco, CA",
            position: "Designer / Media Consultant",
            startDate: "1999-09-01",
            endDate: "2000-06-30",
            summary:
                "Rich Media specialist researching emerging technologies and translating technical specifications into useful direction for engineering and product teams.",
            highlights: [
                "Researched emerging web technologies and translated complex specifications into direction engineering and product could act on.",
                "Partnered with engineering and product teams to expand platform capabilities based on research findings.",
                "Evaluated browser ecosystems and compatibility requirements to shape cross-platform strategies."
            ],
            tags: ["design"]
        },
        {
            name: "Media Alliance",
            location: "San Francisco, CA",
            position: "Contract Instructor",
            website: "https://www.media-alliance.org/",
            startDate: "2001-03-01",
            endDate: "2002-02-28",
            summary:
                "Ran adult-ed workshops on Office, Photoshop, and web fundamentals for beginners entering the workforce.",
            highlights: [
                "Designed and taught structured workshops on Microsoft Office Suite, Adobe Photoshop, and web fundamentals.",
                "Provided one-on-one tutoring and technical assistance to keep students moving.",
                "Managed the computer lab, keeping equipment and software ready for daily classes."
            ],
            tags: ["instructor"]
        },
        {
            name: "Tele Atlas (Formerly Etak)",
            location: "Menlo Park, CA",
            position: "Instructor",
            startDate: "2000-11-01",
            endDate: "2001-01-31",
            summary:
                "Developed and delivered training programs on data collection methodologies, evaluating trainee performance against quality standards.",
            highlights: [
                "Developed and delivered training on data collection techniques, observational best practices, and proprietary software.",
                "Evaluated trainee performance through practical exercises and assessments to keep them aligned with quality guidelines.",
                "Provided constructive feedback and one-on-one coaching to improve trainee accuracy and efficiency.",
                "Served as go-to resource for protocol clarification, contributing to data quality improvement."
            ],
            tags: ["instructor"]
        },
        {
            name: "Bay Area Video Coalition",
            location: "San Francisco, CA",
            position: "Contract Instructor",
            website: "https://www.bavc.org/",
            startDate: "1999-10-01",
            endDate: "2000-05-31",
            summary:
                "Taught advanced Adobe After Effects and Dreamweaver at a professional video coalition, mentoring students on portfolio-quality work.",
            highlights: [
                "Developed and taught curricula for Adobe After Effects and Dreamweaver.",
                "Led multi-session workshops combining lecture, demonstration, and hands-on practice.",
                "Mentored students on digital media production best practices, strengthening portfolio quality.",
                "Provided constructive feedback on projects, fostering a collaborative learning environment."
            ],
            tags: ["instructor"]
        },
        {
            name: "Houston Multimedia Center",
            location: "Houston, TX",
            position: "Instructor",
            startDate: "1997-01-01",
            endDate: "1998-04-30",
            summary:
                "Designed and taught web design and motion graphics courses, guiding adult learners from concept through execution on real projects.",
            highlights: [
                "Developed curriculum and taught classes on Adobe PageMill, HTML, Photoshop, and After Effects.",
                "Broke down complex technical concepts into digestible lessons for varied learning styles.",
                "Guided students through hands-on projects from concept to execution, building practical skills.",
                "Provided individualized support and constructive feedback to help students master techniques."
            ],
            tags: ["instructor"]
        }
    ],
    education: [
        {
            institution: "Austin Community College - Austin, TX",
            area: "American Sign Language",
            studyType: "Certificate",
            startDate: "2015",
            endDate: "2017",
            gpa: "4.0",
            courses: ["DB1101 - ASL I", "DB1101 - ASL II", "DB1101 - ASL III", "DB1101 - ASL IV", "CS2011 - VGC"]
        },
        {
            institution: "ASL School - Austin, TX",
            area: "American Sign Language",
            studyType: "Certificate",
            startDate: "2008",
            endDate: "2012",
            gpa: "n/a",
            courses: []
        },
        {
            institution: "Vista College - Berkeley, CA",
            area: "Video Editing and Life Drawing",
            studyType: "CE",
            startDate: "2001",
            endDate: "2002",
            gpa: "3.143",
            courses: []
        },
        {
            institution: "A.I. of Houston - Houston, TX",
            area: "Fine Art, Typography, Layout, 3D Max",
            studyType: "CE",
            startDate: "1995",
            endDate: "1996",
            gpa: "n/a",
            courses: []
        },
        {
            institution: "San Jacinto College - Pasadena, TX",
            area: "Computer Science, Fine Art",
            studyType: "CE",
            startDate: "1993",
            endDate: "1995",
            gpa: "2.75",
            courses: []
        }
    ],
    skills: [
        {
            name: "Test Strategies",
            tags: ["qa-ai"],
            keywordLimit: 0,
            keywords: [
                "UAT",
                "Regression",
                "Agile",
                "Functional",
                "Integration",
                "Smoke",
                "Sanity",
                "Exploratory",
                "Black Box",
                "System",
                "Usability",
                "End-to-end",
                "API",
                "Acceptance",
                "508 Compliance",
                "HIPAA Compliance",
                "Cross-browser",
                "Cross-platform",
                "Mobile",
                "Desktop",
                "Web Application",
                "Release Validation",
                "Data Integrity",
                "Compatibility",
                "Verification",
                "Validation Testing"
            ]
        },
        {
            name: "Manual Testing & QA Process",
            tags: ["qa-ai"],
            keywordLimit: 0,
            keywords: [
                "Manual Testing",
                "Test Planning",
                "Test Case Design",
                "Bug Reporting",
                "Test Strategy Writing",
                "QA Process Implementation"
            ]
        },
        {
            name: "API Testing",
            tags: ["qa-ai"],
            keywordLimit: 0,
            keywords: [
                "SOAP API Testing",
                "REST API Testing",
                "Postman",
                "Chrome Developer Tools"
            ]
        },
        {
            name: "Platform Testing",
            tags: ["qa-ai"],
            keywordLimit: 0,
            keywords: [
                ".NET Platform Testing",
                "Java Platform Testing",
                "Web Applications",
                "Mobile (iOS/Android)",
                "Desktop (PC/Mac/Linux)",
                "Cross-browser/Cross-platform"
            ]
        },
        {
            name: "Business Analysis",
            tags: ["qa-lead", "qa-ai", "business-analyst"],
            keywords: [
                "Requirements Elicitation",
                "User Stories & Acceptance Criteria",
                "Process Mapping & Documentation",
                "Gap Analysis",
                "Stakeholder Management",
                "Change Management",
                "Requirements Traceability",
                "Detailed Specification Writing"
            ]
        },
        {
            name: "Problem-Solving & Analysis",
            tags: ["business-analyst", "customer-service"],
            keywords: [
                "Attention to Detail",
                "Analytical Thinking",
                "Problem-Solving",
                "Critical Thinking",
                "Root Cause Analysis",
                "Troubleshooting",
                "Complex Task Decomposition"
            ]
        },
        {
            name: "Leadership & Process",
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor"],
            keywords: [
                "QA Process Implementation",
                "Team Leadership",
                "Process Standardization",
                "SDLC",
                "Agile/Scrum",
                "Production Support",
                "Remote Team Management"
            ]
        },
        {
            name: "Testing Methodologies & Frameworks",
            tags: ["qa-lead", "qa-ai", "business-analyst"],
            keywords: [
                "Agile Testing",
                "Regression Testing",
                "User Acceptance Testing (UAT)",
                "Test Planning",
                "CI/CD Testing",
                "Accessibility & 508 Testing",
                "Output Verification & Validation"
            ]
        },
        {
            name: "AI & Prompt Engineering",
            tags: ["qa-lead", "qa-ai"],
            keywords: [
                "Prompt Engineering & Optimization",
                "AI Red Teaming & Adversarial Testing",
                "LLM Output Validation & QA",
                "Hallucination Detection & Fact-Checking",
                "LLM Prompt Pipeline Design",
                "AI Workflow Automation",
                "AI Pair Programming (Claude Code, Copilot)",
                "Rapid AI Tool Adoption"
            ]
        },
        {
            name: "Test Management & Documentation",
            tags: ["qa-lead", "qa-ai"],
            keywords: [
                "JIRA/Xray",
                "JIRA Administration",
                "Confluence",
                "TestRail",
                "SOP Development",
                "Risk Management"
            ]
        },
        {
            name: "Training & Enablement",
            tags: ["instructor"],
            keywords: [
                "Curriculum Development",
                "Adult Learning Facilitation",
                "Software Instruction",
                "Onboarding & Knowledge Transfer",
                "Documentation & SOP Creation",
                "One-on-One Coaching"
            ]
        },
        {
            name: "Interpersonal & Collaboration",
            tags: ["business-analyst", "instructor", "customer-service"],
            keywords: [
                "Clear Communication",
                "Curiosity",
                "Cross-functional Collaboration",
                "Mentoring",
                "Agile Coaching",
                "Public Speaking & MC"
            ]
        },
        {
            name: "Customer Service & Support",
            tags: ["customer-service"],
            keywords: [
                "High-Touch Customer Support",
                "De-escalation & Conflict Resolution",
                "Account Recovery & Restoration",
                "Live Chat Support",
                "Ticket System Support (Parature)",
                "Empathetic Communication",
                "Active Listening",
                "End-User Advocacy",
                "Stakeholder Communication",
                "Production Incident Response",
                "Cross-Team Coordination",
                "Inclusive User Research",
                "Audience & Venue Safety",
                "Fraud & Exploit Documentation",
                "Trust & Safety Operations",
                "High-Volume Support",
                "Customer Experience Documentation"
            ]
        },
        {
            name: "Accessibility & Inclusive Design",
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor", "customer-service"],
            keywords: [
                "508 Compliance Testing",
                "WCAG Awareness",
                "JAWS Screen Reader",
                "NVDA Screen Reader",
                "Inclusive Product Advocacy",
                "American Sign Language (Conversational)",
                "Deaf Cultural Competency"
            ]
        },
        {
            name: "Platforms & Environments",
            tags: ["qa-lead", "qa-ai"],
            keywords: [
                "Web Applications",
                "Mobile (iOS/Android)",
                "Desktop (PC, Mac, Linux)",
                "Cross-browser/Cross-platform",
                "REST API Testing",
                "Gaming Platforms & Consoles"
            ]
        },
        {
            name: "Tools & Technologies",
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor"],
            keywords: [
                "GitHub",
                "Chrome Developer Tools",
                "SQL / JQL",
                "JavaScript/HTML/CSS",
                "Command Line Interfaces",
                "Postman"
            ]
        },
        {
            name: "Industry Expertise",
            tags: ["qa-lead", "qa-ai", "business-analyst", "customer-service"],
            keywords: [
                "Healthcare & Telehealth",
                "Gaming & Entertainment",
                "Educational Technology",
                "Live Events & Hosting",
                "Government & Veterans Affairs",
                "Virtual Reality (VR)"
            ]
        },
        {
            name: "Office and Image Suites",
            tags: ["qa-lead", "qa-ai", "business-analyst", "instructor", "customer-service"],
            keywords: [
                "Adobe Creative Suite",
                "Office 365: Teams, Word, Excel, PowerPoint, Outlook",
                "Google Workspace: Drive, Docs, Sheets",
                "Canva",
                "JIRA Confluence",
                "GIMP"
            ]
        },
        {
            name: "A/V Production & Coordination",
            tags: ["event-host"],
            keywords: [
                "Live Sound Engineering & Mixing",
                "A/V Equipment Operation & Troubleshooting",
                "Client & Performer Coordination",
                "Music Programming & Live Cueing",
                "Event Atmosphere Management",
                "Technical Setup & Strike Efficiency"
            ]
        }
    ],
    languages: [
        {
            language: "English",
            fluency: "Native speaker"
        },
        {
            language: "Spanish",
            fluency: "Conversational"
        },
        {
            language: "ASL",
            fluency: "Conversational"
        }
    ]
};