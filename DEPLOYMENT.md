# Deployment Guide

This repository contains two separate deployable parts:

- `backend/` — Express + MongoDB API service
- `bulb/` — Vite React frontend

## Recommended deployment: Render
Render can host both services from the same repo.

### 1) Push your code to GitHub

From the repo root (`c:\Users\satish\OneDrive\Desktop\reactvite\bulb`):
```bash
git add .
git commit -m "Prepare app for deployment"
git push origin main
```

### 2) Deploy the backend on Render

1. Open Render and connect your GitHub account.
2. Create a new **Web Service**.
3. Select the repository.
4. Set the **Root Directory** to `backend`.
5. Set the **Build Command** to:
   - leave empty, or `npm install`
6. Set the **Start Command** to:
   - `npm start`
7. Add environment variables under `Environment`:
   - `MONGO_URI` = your MongoDB Atlas connection string
   - `JWT_SECRET` = any secret string for JWT signing
   - `PORT` may be left unset because Render provides it automatically

> Make sure `MONGO_URI` is set on the Render service. If it is missing, the backend will try to connect to `localhost:27017` and fail.

8. Create the service and let Render deploy.


### 3) Deploy the frontend on Render

1. Create a new **Static Site** on Render.
2. Select the same repository.
3. Set the **Root Directory** to `bulb`.
4. Set the **Build Command** to:
   - `npm run build`
5. Set the **Publish Directory** to:
   - `dist`
6. Add this environment variable:
   - `VITE_API_BASE_URL` = `https://<your-backend>.onrender.com/api`
   - Replace `<your-backend>` with the actual Render backend service hostname.
7. Save and deploy.

> Important: Vite reads `VITE_API_BASE_URL` at build time, so the frontend must be redeployed after adding or changing it.

### 4) Verify the deployment

- Backend should be available at a URL like `https://<your-backend>.onrender.com`
- Frontend should be available at a URL like `https://<your-frontend>.onrender.com`
- The frontend will call the backend using `VITE_API_BASE_URL`.

### 5) If you do not see env vars during site creation

1. Finish creating the Static Site.
2. Open the site in Render.
3. Go to the `Environment` tab.
4. Add `VITE_API_BASE_URL` and save.
5. Redeploy the frontend.

## Notes about the code

- `backend/package.json` now includes a `start` script:
  - `npm start`
- `bulb/src/services/api.js` reads the backend URL from:
  - `import.meta.env.VITE_API_BASE_URL`
  - default fallback: `http://localhost:5000/api`

## Alternate option

If you want to deploy only the frontend to Vercel and backend to Render/Railway:

- Frontend: root `bulb`, build `npm run build`, output `dist`
- Backend: root `backend`, start `npm start`
- Set `VITE_API_BASE_URL` on the frontend host to the backend URL

## Local test commands

Frontend:
```bash
cd bulb
npm install
npm run dev
```

Backend:
```bash
cd backend
npm install
npm start
```
