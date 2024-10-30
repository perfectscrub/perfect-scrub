/**
 * List of public routes accessible to the public. These routes do not rwuire authentication
 * @type {string[]}
 */
export const publicRoutes=[
    "/",
    "/about",
    "/blog",
    "/blog/find-the-best-commercial-cleaning-near-me-in-2023",
    "/blog/indicators-to-assess-the-performance-of-your-cleaning-contract",
    "/blog/ten-ways-a-clean-office-supports-mental-health-at-work",
    "/blog/tough-stains-and how to remove-them",
    "/blog/why-you-need-a-cleaning-service",
    "/commercial-cleaning",
    "/commercial-cleaning/day-care-cleaning",
    "/commercial-cleaning/hotel-cleaning",
    "/commercial-cleaning/medical-offices-cleaning",
    "/commercial-cleaning/office-buildings-cleaning",
    "/commercial-cleaning/post-construction-cleaning",
    "/commercial-cleaning/recreational-facilities-cleaning",
    "/commercial-cleaning/retail-stores-cleaning",
    "/commercial-cleaning/school-cleaning",
    "/contact",
    "/privacy-policy",
    "/quote",
    "/services",
    "/services/carpet-cleaning",
    "/services/deep-cleaning",
    "/services/disinfecting-services",
    "/services/janitorial-services",
    "/services/standard-cleaning",
    "/services/washroom-cleaning-and-consumables",
    "/subcontractor-form",
    "/success",
    "/terms-and-conditions",
]

/**
 * List of routes that are used for authentication
 * These routes redirect logged in users to dashboard
 * @type {string[]}
 */
export const authRoutes=[
    "/auth/login",
    "/auth/register",
    "/auth/error",
]

/**
 * the prefix for API authentication routes
 * Routes with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix="/api/auth";


/**
 * The default redirect path after log in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
