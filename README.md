# 🛍️ The Makers Market

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**The Makers Market** is a modern e-commerce platform for **handmade** and **locally crafted products**, with features like product listings, secure authentication, cart management, and an integrated crowdfunding module. Built with **Next.js** and deployed on **Vercel**.

---

## 🚀 Demo

- **Live Website:** [https://finalwebsite-inky.vercel.app/](https://finalwebsite-inky.vercel.app/)

---

## ✨ Features

- 🛒 **Product Catalog** – Browse and view handmade products.
- 🛍️ **Cart & Checkout** – Add products to cart and place orders.
- 🔐 **Authentication** – Sign in with Google or email credentials.
- 💬 **AI Chatbot** – Get instant product and site assistance.
- 🤝 **Crowdfunding Integration** – Support creative and local campaigns.
- 📱 **Responsive Design** – Optimized for both desktop and mobile.

---

## 🛠 Tech Stack

| Category      | Technology |
|---------------|------------|
| Frontend      | Next.js 14, React 18 |
| Styling       | Tailwind CSS 3.4 |
| Auth          | NextAuth.js |
| Deployment    | Vercel |
| Database/ORM  | Drizzle ORM + PostgreSQL |
| Other         | TypeScript, REST APIs |

---

## 📦 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Grey0124/The-Makers-Market.git
cd The-Makers-Market

```
### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure environment variables
Create a .env file in the root directory and add:
```bash
# ==================================================
# 🌐 Public App Settings
# ==================================================
NEXT_PUBLIC_SERVER_URL=http://localhost:3000   # ⬅️ Replace with your deployed URL if not local
NEXT_PUBLIC_APP_NAME="The Makers Market"       # ⬅️ Replace if changing app name
NEXT_PUBLIC_APP_DESCRIPTION="Platform for artisans to sell handmade and locally crafted products"

# ==================================================
# 🗄️ Database (Drizzle ORM + Neon Postgres)
# ==================================================
# Full connection string (required)
DATABASE_URL="postgresql://<PGUSER>:<PGPASSWORD>@<PGHOST>/<PGDATABASE>?sslmode=require"   # ⬅️ Replace all placeholders

# Non-pooled connection string (optional)
DATABASE_URL_UNPOOLED="postgresql://<PGUSER>:<PGPASSWORD>@<PGHOST>/<PGDATABASE>?sslmode=require"

# Separate params (optional but useful for CLI/tools)
PGHOST="<your-neon-host>"          # e.g. ep-abcd-1234.ap-southeast-1.aws.neon.tech
PGHOST_UNPOOLED=""                 # Same as PGHOST unless using Neon’s dedicated unpooled connection host
PGUSER="<your-db-username>"        # e.g. neondb_owner
PGDATABASE="<your-db-name>"        # e.g. neondb
PGPASSWORD="<your-db-password>"

# ==================================================
# 🔐 Authentication
# ==================================================
AUTH_SECRET="<your-auth-secret>"   # Required for NextAuth/Auth.js sessions
AUTH_GOOGLE_ID="<your-google-oauth-client-id>"
AUTH_GOOGLE_SECRET="<your-google-oauth-client-secret>"

# ==================================================
# 🗺️ Google Maps API
# ==================================================
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="<your-google-maps-api-key>"

# ==================================================
# 💳 Payments
# ==================================================
PAYMENT_METHODS="PhonePe,Stripe,CashOnDelivery"
DEFAULT_PAYMENT_METHOD="PhonePe"

# PayPal
PAYPAL_CLIENT_ID="<your-paypal-client-id>"
PAYPAL_APP_SECRET="<your-paypal-app-secret>"
PAYPAL_API_URL="https://api.sandbox.paypal.com"   # Use production URL in live mode

# ==================================================
# 📦 File Uploads
# ==================================================
UPLOADTHING_TOKEN="<your-uploadthing-token>"
UPLOADTHING_SECRET_KEY="<your-uploadthing-secret-key>"

# ==================================================
# 👤 User Roles
# ==================================================
USER_ROLES="admin,user"

# ==================================================
# 📧 Email (Resend)
# ==================================================
RESEND_API_KEY="<your-resend-api-key>"
SENDER_EMAIL="onboarding@resend.dev"   # Replace with your verified sender email


```
### 4️⃣ Run the development server
```bash
npm run dev
# or
yarn dev
```

Now open http://localhost:3000 in your browser.
