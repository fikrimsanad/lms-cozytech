# Test Credentials

## Admin Account
- Email: admin@mail.com
- Password: 123456
- Role: admin
- Redirect after login: /admin

## Student Account
- Email: user@mail.com
- Password: 123456
- Role: student
- Redirect after login: /dashboard

## Auth Endpoints
- GET /api/auth/csrf - Get CSRF token
- GET /api/auth/providers - List providers (credentials)
- POST /api/auth/callback/credentials - Login
- GET /api/auth/session - Get current session (returns name, email, role, id)
- POST /api/auth/signout - Logout

## Protected Routes
- /dashboard/* → requires login (any role)
- /admin/* → requires login + role "admin"
- /login → redirects to dashboard/admin if already logged in

## API Endpoints
- GET /api/kelas - List kelas
- POST /api/seed - Seed database
