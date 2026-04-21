# LMS CozyTech - PRD (Product Requirements Document)

## Problem Statement
Restructure Next.js App Router LMS project for game development learning platform. Add authentication (NextAuth), API routes with CRUD, middleware, and clean folder structure.

## Architecture
- **Framework**: Next.js 16.1.1 (App Router, Turbopack)
- **Auth**: NextAuth v5 (next-auth@5.0.0-beta.31) - Credentials + Google OAuth
- **Database**: MongoDB (local)
- **Styling**: Tailwind CSS 4 + Radix UI Themes
- **Language**: TypeScript

## Core Requirements
1. Landing page (kelas terbaru, pengajar, testimoni)
2. Dashboard user (progress belajar, kelas, sertifikat, live session)
3. Dashboard admin (kelas CRUD, transaksi, peserta)
4. Authentication (Credentials + Google OAuth)
5. API routes with basic CRUD logic
6. Middleware for route protection

## What's Been Implemented (Jan 2026)
### Folder Restructuring
- Removed unused `landingpage/` folder
- Removed unused `dashboard/pages/` folder (migrated content to new routes)
- Created proper dashboard sub-routes: kelas-saya, cari-kelas, sertifikasi, komunitas, pembayaran, pengaturan
- Created admin sub-routes: kelas (list, buat, [id]), transaksi, peserta
- Created auth pages: (auth)/login, (auth)/register
- Created dashboard/layout.tsx (extracts sidebar + header)
- Created admin/layout.tsx (admin sidebar)
- Updated navigation links in navigasi.tsx

### Authentication
- auth.ts - NextAuth v5 config with Credentials + Google
- auth.config.ts - Edge-compatible auth config for middleware
- middleware.ts - Route protection for /dashboard, /admin, /login, /register
- Login page with email/password + Google OAuth
- Register page with form validation

### API Routes
- /api/auth/[...nextauth] - NextAuth handler
- /api/auth/register - User registration
- /api/kelas - CRUD for classes (list, create)
- /api/kelas/[id] - Single class (get, update, delete)
- /api/transaksi - Transactions (list, create)
- /api/peserta - Students list (admin only)
- /api/sertifikasi - Certification (list, register)
- /api/seed - Database seeding

### Database
- MongoDB collections: users, kelas, transaksi, enrollments, sertifikat
- Indexes on users.email (unique), enrollments (compound)
- Seed data: admin user, test user, 3 sample kelas

## User Personas
- **Student**: Browse classes, enroll, watch videos, earn certificates
- **Admin**: Manage classes, view transactions, manage students
- **Instructor**: (future) Create and manage class content

## Prioritized Backlog
### P0 (Critical)
- [x] Folder restructuring
- [x] Authentication (NextAuth Credentials: admin@mail.com / user@mail.com, password 123456)
- [x] API routes with CRUD
- [x] Middleware route protection
- [x] Database seed data
- [x] Navigation menu (Navbar + Footer) on landing pages
- [x] Halaman Daftar Kelas (/kelas)
- [x] Halaman Blog (/blog)
- [x] Halaman About (/tentang)
- [x] Halaman Kontak (/kontak)

### P1 (Important)
- [ ] Dashboard: Display actual user name from session
- [ ] Admin dashboard: Fetch real stats from API
- [ ] Admin kelas page: Fetch and display kelas list
- [ ] Payment integration
- [ ] Email notification for transactions

### P2 (Nice to have)
- [ ] Google OAuth setup (needs Google Console credentials)
- [ ] Video player integration
- [ ] Certificate PDF generation
- [ ] Real-time notifications
- [ ] Search/filter functionality on class listing
