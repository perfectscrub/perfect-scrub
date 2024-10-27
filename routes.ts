/**
 * List of public routes accessible to the public. These routes do not rwuire authentication
 * @type {string[]}
 */
export const publicRoutes=[
    "/",
    "/services",
]

/**
 * List of routes that are used for authentication
 * These routes redirect logged in users to dashboard
 * @type {string[]}
 */
export const authRoutes=[
    "/auth/login",
    "/auth/register",
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
export const DEFAULT_LOGIN_REDIRECT = "/admin-dashboard";
