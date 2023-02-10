// A helper funtion to validate user role with current Route.
// it is used in Authentication gard.

// a routes type.
type Routes = string[];

// public routes
export const publicRoutes: Routes = [
    '404',
    '/',
    '/forgetpassword',
    '/changepassword',
    '/mfa_login',
    '/emailSentConfirmation',
    '/resetpassword',
];

// Admin users Private Routes.
export const adminRoutes: Routes = [
    '/itr-admin',
    '/itr-admin/profile',
    '/itr-admin/changepassword',
    '/itr-admin/create_new_ticosys_admin',
    '/itr-admin/ticosys_admins',
    '/itr-admin/ticoSys_admin/',
    '/itr-admin/tenants/',
    '/itr-admin/tenant/',
];

// Admin users Private Routes.
export const ticosysAdminRoutes: Routes = [
    '/itr-admin',
    '/itr-admin/profile',
    '/itr-admin/changepassword',
    '/itr-admin/tenants/',
    '/itr-admin/tenant/',
];

