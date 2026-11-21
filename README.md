Note - when accessing the deployment , it might take few seconds for the deployment to run , its normal and intended , give it a few seconds

<a id="top"></a>

<div align="center">

### A full-stack real-time auction platform built with the MERN stack

**Create auctions · Bid in real-time · Live auction battles · AI-powered · Smart recommendations**

</div>

---

## Quick Start

### Prerequisites

- **Node.js** 20+ and npm
- **MongoDB** (local or [Atlas](https://www.mongodb.com/atlas))
- **Cloudinary** account ([free tier](https://cloudinary.com/))

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/Bolibazaar.git
cd Bolibazaar

# Install the root development runner, backend, and frontend
npm install
npm install --prefix server
npm install --prefix client

```

### 2. Environment Variables

**Server** (`server/.env`):

```env
PORT=3000
ORIGIN=http://localhost:5173
MONGO_URL=mongodb://localhost:27017/auction
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLOUDINARY_URL=cloudinary://...
RESEND_API_KEY=re_xxxxxxxxxxxx
```

**Optional AI keys** (for AI-powered auction generation):

```env
GEMINI_API_KEY=your-gemini-key       # Google Gemini
GROQ_API_KEY=your-groq-key           # Groq (Mixtral)
OPENAI_API_KEY=your-openai-key       # OpenAI GPT-3.5
```

> If no AI key is set, the system uses a smart mock fallback - no external API required.

**Client** (`client/.env`):

```env
VITE_API=http://localhost:3000
```

### 3. Run

```bash
npm run dev
```

This starts both the backend and frontend. Open **http://localhost:5173**.

---

## Why Bolibazaar?

Bolibazaar combines a modern-yet-vintage UI/UX with an inviting feel, so first-time users and power bidders both feel at home.

Most auction systems stop at basic CRUD. Bolibazaar goes much further:

- **Real-time bidding** — Socket.io rooms with atomic MongoDB updates prevent race conditions
- **Auction House** — Dedicated live battle experience where users join active sessions and watch winner resolution in real time
- **Credit-based economy** — Users earn starter credits on signup, spend credits to bid, and get refunds on lost auctions
- **AI-powered** — Generate listing content using Gemini, Groq, or OpenAI with smart fallback
- **Smart recommendations** — Trending auctions ranked by recent bid activity, with AI recommendation plug-in ready
- **Admin analytics** — Bid activity charts, top auctions, credit flow, category performance, and leaderboards
- **Real-time notifications** — Bell notifications for bids, wins, and auction updates with read/unread tracking
- **Production security** — httpOnly cookies, JWT auth, XSS-safe email templates, input sanitization

---

## Features

| Category              | Features                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Authentication**    | JWT with httpOnly secure cookies · Auto-login on refresh · Role-based access (User/Admin) · Password change with validation                                                    |
| **Auctions**          | Create with image upload (Cloudinary) · Browse with pagination · Category filtering · Live countdown timers · Auto-winner detection on expiry · Auction lifecycle management   |
| **Auction House**     | Live auction battles · Real-time participant tracking · Winner declaration flow · Active session visibility for all authenticated users                                        |
| **Real-time Bidding** | Socket.io room-based architecture · Atomic bid updates (no race conditions) · Live active user count · Instant bid broadcast to all viewers · Seller cannot bid on own auction |
| **Credit System**     | Starter credits on signup (100 credits) · Credit wallet with balance display · Full transaction ledger · Credits deducted on bid, returned on outbid/lost · Paginated history  |
| **AI Powered**        | Auto-generate auction content via Gemini / Groq / OpenAI · Smart fallback to mock if no API key · Context-aware prompts with category and item name                            |
| **Notifications**     | Real-time bell notifications · Unread count badge · Mark individual or all as read · Linked to auction items · Paginated notification feed                                     |
| **Recommendations**   | Trending auctions by recent bid activity (30-min window) · Excludes already-bid auctions · AI-ready plug-in architecture for personalized recommendations                      |
| **Analytics (Admin)** | Bid activity over time (hour/day/week) · Top 10 auctions by bid count · Credit flow by month · Category performance breakdown · Top 10 bidders leaderboard · Audit log ready   |
| **Dashboard**         | Personal stats (total/active auctions) · Recent auctions grid · Quick navigation to all sections                                                                               |
| **Admin Panel**       | System-wide statistics · User management with search, sort, pagination · Auction management · Credit management · Recent signups tracking · Role-based route protection        |
| **Security**          | Login tracking (IP, geo-location, device, browser) · Login history per user · bcrypt password hashing · Environment variable validation at startup                             |
| **Email**             | Contact form with Resend · Dual email (admin notification + user confirmation) · XSS-safe HTML templates                                                                       |
| **Performance**       | React Query caching · Hover-based data prefetching · View Transitions API page animations · gzip compression · Optimized MongoDB indexes                                       |

---

## Tech Stack

<table>
<tr><td><b>Frontend</b></td><td><b>Backend</b></td><td><b>Infrastructure</b></td></tr>
<tr><td>

React 19 + Vite  
Tailwind CSS v4  
React Router v7  
Redux Toolkit  
TanStack React Query  
Socket.io Client  
React Hot Toast

</td><td>

Node.js + Express 5  
MongoDB + Mongoose  
Socket.io  
JWT + bcrypt  
Cloudinary + Multer  
Resend (email)  
Compression

</td><td>

Vercel (frontend + backend)  
GitHub Actions CI/CD  
Cloudinary CDN

</td></tr>
</table>

---

## Project Structure

```
Bolibazaar/
├── client/                                # React + Vite frontend
│   ├── src/
│   │   ├── api/                           # API wrappers
│   │   ├── components/                    # Shared and feature components
│   │   │   ├── Landing/                   # Landing page sections
│   │   │   ├── auction/                   # Auction-specific UI blocks
│   │   │   └── redesign/                  # New UI/UX components
│   │   ├── config/                        # API/socket/design tokens
│   │   ├── hooks/                         # Custom hooks (auction, admin, contact, etc.)
│   │   ├── layout/                        # Open/Main/Admin layouts
│   │   ├── pages/                         # Route pages
│   │   ├── routers/                       # App route maps
│   │   ├── services/                      # Service layer
│   │   ├── store/                         # Redux state
│   │   ├── test/                          # Frontend tests
│   │   └── utils/                         # Utility helpers
│   └── package.json
│
├── server/                                # Express backend
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   ├── ai.controller.js
│   │   ├── analytics.controller.js
│   │   ├── auction.controller.js
│   │   ├── auth.controller.js
│   │   ├── contact.controller.js
│   │   ├── credit.controller.js
│   │   ├── liveAuction.controller.js
│   │   ├── notification.controller.js
│   │   ├── recommendation.controller.js
│   │   └── user.controller.js
│   ├── routes/                            # REST API route files
│   ├── socket/
│   │   ├── auction.handler.js
│   │   ├── liveAuction.handler.js
│   │   └── index.js
│   ├── middleware/                        # Auth and upload middleware
│   ├── models/                            # Mongoose models
│   ├── services/                          # Cloudinary + notification services
│   ├── utils/                             # JWT, cookies, geo utilities
│   ├── config/                            # DB + env config
│   ├── app.js
│   └── server.js
│
├── screenshots/                           # README screenshots
└── README.md
```

---

## Architecture

### Real-time Bidding Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  Client (ViewAuction)                                           │
│                                                                 │
│  useSocket hook                    REST API                     │
│  ┌──────────────┐                 ┌──────────────┐              │
│  │ Connect      │                 │ POST /bid    │              │
│  │ Join Room    │                 │ Atomic Update│              │
│  │ Listen Bids  │                 │ Deduct Credit│              │
│  │ Cleanup      │                 │ Return Data  │              │
│  └──────┬───────┘                 └──────┬───────┘              │
│         │                                │                      │
└─────────┼────────────────────────────────┼──────────────────────┘
          │ WebSocket                      │ HTTP
          │                                │
┌─────────┼────────────────────────────────┼──────────────────────┐
│  Server │                                │                      │
│         ▼                                ▼                      │
│  ┌──────────────┐                 ┌──────────────┐              │
│  │ Socket.io    │                 │ Express API  │              │
│  │ Auth via JWT │                 │ secureRoute  │              │
│  │ Room: {id}   │◄────Broadcast───│ placeBid()   │              │
│  │ Track Users  │                 │ Atomic update│              │
│  └──────────────┘                 └──────────────┘              │
│                                          │                      │
│                                   ┌──────▼───────┐              │
│                                   │   MongoDB    │              │
│                                   │ findOneAndUp │              │
│                                   │ date + price │              │
│                                   │  condition   │              │
│                                   └──────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

**Race condition prevention**: Bids use `findOneAndUpdate` with a price condition — if two users bid simultaneously, only the first succeeds; the second gets a retry prompt.

### Credit System Flow

```
New User Signup ──► 100 starter credits added ──► CreditLedger entry (type: "assigned")
        │
        ▼
User Places Bid ──► Credits deducted ──► CreditLedger entry (type: "deducted")
        │
        ├── Outbid? ──► Credits returned ──► CreditLedger entry (type: "returned")
        │
        └── Wins auction? ──► Credits stay deducted ──► CreditLedger entry (type: "won")
```

---

## API Reference

### Authentication

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| `POST` | `/auth/signup` | Register new user            |
| `POST` | `/auth/login`  | Login (sets httpOnly cookie) |
| `POST` | `/auth/logout` | Logout (clears cookie)       |

### User

| Method  | Endpoint       | Description              | Auth     |
| ------- | -------------- | ------------------------ | -------- |
| `GET`   | `/user`        | Get current user profile | Required |
| `PATCH` | `/user`        | Change password          | Required |
| `GET`   | `/user/logins` | Login history (last 10)  | Required |

### Auctions

| Method | Endpoint             | Description                | Auth     |
| ------ | -------------------- | -------------------------- | -------- |
| `GET`  | `/auction`           | List auctions (paginated)  | Required |
| `POST` | `/auction`           | Create auction (multipart) | Required |
| `GET`  | `/auction/stats`     | Dashboard statistics       | Required |
| `GET`  | `/auction/myauction` | User's own auctions        | Required |
| `GET`  | `/auction/mybids`    | Auctions user has bid on   | Required |
| `GET`  | `/auction/:id`       | Single auction detail      | Required |
| `POST` | `/auction/:id/bid`   | Place a bid                | Required |

### Auction House / Live Auction

| Method | Endpoint               | Description                         | Auth     |
| ------ | ---------------------- | ----------------------------------- | -------- |
| `GET`  | `/live-auction/active` | Get currently active live auction   | Required |
| `GET`  | `/live-auction/:id`    | Get live auction details by auction | Required |

### Credits

| Method | Endpoint           | Description                | Auth     |
| ------ | ------------------ | -------------------------- | -------- |
| `GET`  | `/credits/balance` | Get user's credit balance  | Required |
| `GET`  | `/credits/history` | Credit transaction history | Required |

### AI Powered

| Method | Endpoint                   | Description                 | Auth     |
| ------ | -------------------------- | --------------------------- | -------- |
| `POST` | `/ai/generate-description` | Generate AI auction content | Required |

### Notifications

| Method  | Endpoint                      | Description            | Auth     |
| ------- | ----------------------------- | ---------------------- | -------- |
| `GET`   | `/notifications`              | Get user notifications | Required |
| `GET`   | `/notifications/unread-count` | Get unread count       | Required |
| `PATCH` | `/notifications/read-all`     | Mark all as read       | Required |
| `PATCH` | `/notifications/:id/read`     | Mark one as read       | Required |

### Recommendations

| Method | Endpoint                   | Description                      | Auth     |
| ------ | -------------------------- | -------------------------------- | -------- |
| `GET`  | `/recommendations/:userId` | Get personalized recommendations | Required |

### Analytics (Admin)

| Method | Endpoint                          | Description                  | Auth  |
| ------ | --------------------------------- | ---------------------------- | ----- |
| `GET`  | `/analytics/bid-activity`         | Bid activity over time       | Admin |
| `GET`  | `/analytics/top-auctions`         | Top 10 auctions by bid count | Admin |
| `GET`  | `/analytics/credit-flow`          | Credit flow by month         | Admin |
| `GET`  | `/analytics/category-performance` | Category performance stats   | Admin |
| `GET`  | `/analytics/top-bidders`          | Top 10 bidders leaderboard   | Admin |
| `GET`  | `/analytics/audit-log`            | Audit log (placeholder)      | Admin |

### Admin

| Method   | Endpoint                             | Description                        | Auth  |
| -------- | ------------------------------------ | ---------------------------------- | ----- |
| `GET`    | `/admin/dashboard`                   | Admin statistics                   | Admin |
| `GET`    | `/admin/users`                       | List users (paginated, searchable) | Admin |
| `PATCH`  | `/admin/users/:id/status`            | Activate/deactivate user           | Admin |
| `PATCH`  | `/admin/users/:id/reset-password`    | Reset user password                | Admin |
| `POST`   | `/admin/assign-credits`              | Assign credits to a user           | Admin |
| `GET`    | `/admin/auctions`                    | List all auctions for moderation   | Admin |
| `POST`   | `/admin/auctions/:id/start-live`     | Start live auction battle          | Admin |
| `POST`   | `/admin/live-auctions/:id/end`       | End active live auction            | Admin |
| `POST`   | `/admin/auctions/:id/declare-winner` | Declare auction winner             | Admin |
| `PATCH`  | `/admin/auctions/:id`                | Edit auction details               | Admin |
| `DELETE` | `/admin/auctions/:id`                | Delete auction                     | Admin |

### Contact

| Method | Endpoint   | Description         | Auth   |
| ------ | ---------- | ------------------- | ------ |
| `POST` | `/contact` | Submit contact form | Public |

---

## Socket.io Events

| Event                | Direction       | Payload                               |
| -------------------- | --------------- | ------------------------------------- |
| `auction:join`       | Client → Server | `{ auctionId }`                       |
| `auction:leave`      | Client → Server | `{ auctionId }`                       |
| `auction:bid`        | Client → Server | `{ auctionId, bidAmount }`            |
| `auction:userJoined` | Server → Room   | `{ userName, userId, activeUsers[] }` |
| `auction:userLeft`   | Server → Room   | `{ userName, userId, activeUsers[] }` |
| `auction:bidPlaced`  | Server → Room   | `{ auction, bidderName, bidAmount }`  |
| `auction:error`      | Server → Client | `{ message }`                         |

Socket connections are authenticated via JWT from cookies. Users are tracked per room with automatic cleanup on disconnect.

---
# Interview Questions Prompt

## 1. System Design

1. How would you design BoliBazaar as a real-time auction platform where multiple users can bid on the same auction simultaneously?
2. Why does BoliBazaar use both REST APIs and Socket.IO, and what responsibilities belong to each?
3. What happens end-to-end when a user places a bid, from the frontend to MongoDB and finally to all connected clients?

## 2. Backend & Data Modeling

1. How would you model users, auctions, bids, credit transactions, and notifications in MongoDB?
2. What indexes and constraints are important for efficiently querying active auctions, bids, and transaction history?
3. How would you maintain consistency between the auction, bid, and credit transaction data?

## 3. Atomic Operations & Concurrent Bidding ⭐

1. How does BoliBazaar prevent two users from successfully placing the same bid when requests arrive simultaneously?
2. Why is an atomic `findOneAndUpdate` with conditions better than `find → check → update` for bidding?
3. If two users simultaneously submit ₹110 when the current bid is ₹100, walk me through exactly what happens at the database level.

## 4. Realtime Communication — Socket.IO

1. Why use Socket.IO instead of polling for real-time bidding?
2. How do Socket.IO rooms and events work for an individual auction?
3. How would you handle disconnects/reconnects, and how would Socket.IO work when multiple backend servers are running?

## 5. Auction Lifecycle

1. How do you model the auction lifecycle from creation → active → expired → winner declared?
2. How do you prevent a bid from being accepted when an auction expires at almost the same time?
3. How would you ensure winner declaration happens exactly once?

## 6. Credit / Wallet System ⭐

1. Why maintain a credit transaction ledger instead of relying only on the user's balance?
2. How do you prevent two simultaneous requests from spending the same credits?
3. What happens if credit deduction succeeds but the bid fails, or the bid succeeds but the credit update fails?

## 7. Authentication & Authorization

1. How does JWT authentication work in BoliBazaar, and why use an `httpOnly` cookie?
2. How are REST APIs and Socket.IO connections authenticated?
3. How do you enforce user vs admin authorization, and why is frontend protection alone insufficient?

## 8. Security

1. How do you prevent a malicious client from modifying the user ID, bid amount, credit balance, or auction ownership?
2. What server-side validation and rate limiting would you implement to prevent fraudulent/spam bidding?
3. How would you protect passwords, cookies, uploaded files, user input, API secrets, and sensitive admin endpoints?

---

## Deployment

The backend uses Socket.IO for live bidding, so deploy it to a persistent Node
service rather than a serverless function. The included `render.yaml` configures
the backend for Render; deploy the frontend separately to Vercel.

### 1. Deploy the backend to Render

Create a new Blueprint from this repository and use `render.yaml`. Set:

- `MONGO_URL`: a reachable MongoDB Atlas connection string (allow Render's
  outbound connections in the Atlas network access settings).
- `ORIGIN`: the exact frontend origin, such as
  `https://bolibazaar.vercel.app` (no trailing slash). Multiple origins can be
  comma-separated.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and
  `CLOUDINARY_API_SECRET`: required for auction image uploads.
- `RESEND_API_KEY`: optional; contact form email delivery returns a clear
  configuration error until this is set.

Render generates `JWT_SECRET`. Keep all credentials in the hosting provider's
environment settings, never in the repository. Confirm the deployment's
`/health` URL reports `{"status":"ok","database":"connected"}`.

### 2. Deploy the frontend to Vercel

Create a Vercel project for this repository and set its **Root Directory** to
`client`. Configure this build-time environment variable for Production (and
Preview if needed):

```env
VITE_API=https://<your-render-service>.onrender.com
```

Use the backend origin only (no `/auction` suffix). Both REST requests and
Socket.IO use this setting. Redeploy after changing it; Vite embeds it in the
frontend build. The Vercel rewrite in `client/vercel.json` supports client-side
routes.

After the Vercel domain is available, set that exact origin in Render's
`ORIGIN` variable and redeploy the backend. For a custom domain, add its origin
as well. Frontend and backend must both use HTTPS in production.

Before promoting a deployment, verify login/signup, authenticated API requests,
auction image uploads, live Socket.IO bidding, and the backend `/health`
endpoint. Do not deploy the Socket.IO backend as a Vercel serverless function:
serverless functions do not provide the persistent WebSocket server required
for this application.


</div>
