# Test Credentials

## Admin Account
- Email: admin@cozytech.com
- Password: admin123
- Role: admin

## Test User Account
- Email: user@cozytech.com
- Password: user123
- Role: user

## Auth Endpoints
- POST /api/auth/register - Register new user
- POST /api/auth/signin - NextAuth sign in
- GET /api/auth/session - Get current session

## API Endpoints
- GET /api/kelas - List kelas
- POST /api/kelas - Create kelas (admin)
- GET /api/kelas/[id] - Get kelas by ID
- PUT /api/kelas/[id] - Update kelas (admin)
- DELETE /api/kelas/[id] - Delete kelas (admin)
- GET /api/transaksi - List transaksi
- POST /api/transaksi - Create transaksi
- GET /api/peserta - List peserta (admin)
- GET /api/sertifikasi - List sertifikasi
- POST /api/sertifikasi - Register sertifikasi
- POST /api/seed - Seed database
