/**
 * Resume Configuration - Default view settings
 * Edit these values to change what appears by default (when no URL query params are specified)
 *
 * Additive History Model:
 *   workHistoryYears = X years of full-detail Professional Experience
 *   additionalHistoryYears = Y MORE years beyond X as condensed Additional Experience
 *   Total visible history = X + Y
 */

const RESUME_CONFIG = {
    // Years of full-detail work history to show by default
    // This is the "Professional Experience" section
    defaultWorkHistoryYears: 15,

    // Maximum years value before treating as "show all"
    // If a years filter exceeds this, no date filtering is applied
    maxYearsThreshold: 50,

    // Default profile to use when no ?profile= parameter is specified
    // This should be one of the real profiles (not "default")
    defaultProfile: "qa-ai",

    // Role profiles - everything is profile-driven
    // Each profile has a `tags` array listing which tags it includes
    // Jobs/skills appear if any of their tags overlap with the profile's tags array
    // "all" profile shows everything regardless of tags (no tags array needed)
    // The defaultProfile setting above determines which profile is used when no ?profile= is specified
    //
    // Additive model:
    //   workHistoryYears: X years shown with full details (Professional Experience)
    //   additionalHistoryYears: Y MORE years shown condensed (Additional Experience)
    //   Total visible = workHistoryYears + additionalHistoryYears
    //   Set additionalHistoryYears to null to disable condensing (all jobs shown full)
    profiles: {
        "all": {
            // Shows everything - all jobs, all skills, no date limits, no condensing
            summaryKey: "default",
            labelKey: "default",
            workHistoryYears: 99,
            additionalHistoryYears: null,
            skillsFormat: "tags"
        },
        "qa-lead": {
            tags: ["qa-lead"],
            summaryKey: "qa-lead",
            labelKey: "qa-lead",
            // 10 years full detail + 10 more years condensed = 20 total
            workHistoryYears: 10,
            additionalHistoryYears: 10,
            // "list" = ATS-friendly comma-separated, "tags" = pill boxes (default)
            skillsFormat: "list"
        },
        "qa-ai": {
            tags: ["qa-ai"],
            summaryKey: "qa-ai",
            labelKey: "qa-ai",
            // 10 years full detail + 10 more years condensed = 20 total
            workHistoryYears: 10,
            additionalHistoryYears: 10,
            skillsFormat: "list"
        },
        "business-analyst": {
            tags: ["business-analyst"],
            summaryKey: "business-analyst",
            labelKey: "business-analyst",
            workHistoryYears: 30,
            additionalHistoryYears: null,
            skillsFormat: "list"
        },
        "instructor": {
            tags: ["instructor"],
            summaryKey: "instructor",
            labelKey: "instructor",
            // 15 years full detail (2011+: GeekSI, EverlyWell, DocbookMD, Luna)
            // + 15 more condensed (2005 and earlier: Diva Productions, teaching jobs)
            workHistoryYears: 15,
            additionalHistoryYears: 15,
            skillsFormat: "list"
        },
        "cs": {
            tags: ["customer-service"],
            summaryKey: "cs",
            labelKey: "cs",
            // 16 years full detail (covers Karaoke, DJ, Kick Butt, Blizzard, Linden Lab)
            // + 10 more condensed (LOC, GoDance, Computer Discovery, Weddings)
            workHistoryYears: 16,
            additionalHistoryYears: 10,
            skillsFormat: "list"
        }
    }
};
