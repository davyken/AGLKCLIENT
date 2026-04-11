# AgroLink Admin Dashboard

Internal admin interface for managing the AgroLink agricultural marketplace — users, listings, and platform data.

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 14+ (App Router) |
| TypeScript | 5+ |
| Tailwind CSS | 3+ |
| Geist | via `next/font` |

---

## Features

- User management — create, edit, delete, ban/unban users
- Listing management — create, edit, delete, change status
- Dashboard overview — platform stats at a glance
- Role-based display — farmer, buyer, admin, both

---

## Project Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout with font and global styles
│   ├── page.tsx          # Dashboard home
│   ├── users/            # User management pages
│   └── listings/         # Listing management pages
├── components/           # Reusable UI components
├── lib/                  # API clients, utilities, helpers
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Yes | Base URL of the AgroLink backend (Render) |
| `NEXT_PUBLIC_ADMIN_SECRET` | Yes | Admin access key for protected routes |

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_API_URL=https://aglk.onrender.com
NEXT_PUBLIC_ADMIN_SECRET=your_secret_here
```

---

## Local Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` and fill in the variables above.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

---

## Build & Production

```bash
npm run build
npm start
```

---

## Deployment

Deployed on Vercel. On every push to `main`, Vercel auto-deploys.

To deploy manually:
```bash
npx vercel --prod
```

Set the environment variables in the Vercel dashboard under **Settings → Environment Variables** before deploying.

---

## Backend

This dashboard consumes the AgroLink REST API hosted on Render:
```
https://aglk.onrender.com
```

Refer to the backend repo for API routes and authentication details.

---

## Known Limitations / TODOs

- [ ] Authentication — admin login not yet implemented, access is currently open
- [ ] Pagination — user and listing tables load all records at once
- [ ] Image upload — listing image editing not yet supported
- [ ] Audit log — no history of admin actions
- [ ] Role guard — no middleware blocking non-admin access
