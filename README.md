# 💪 B14-A6-Fit Log

FitLog is a simple workout library and planning app. You can browse exercises, open a workout to see its details, add exercises to today's plan, and save workouts for later.

The design is dark, clean, and made for people who want to keep their workout routine organized without making it complicated.

## ✨ Main Features

- Responsive design for mobile, tablet, and desktop screens
- Home page with a workout library and responsive workout cards
- Workout details page with equipment, difficulty, sets, reps, calories, rating, and instructions
- Add workouts to **Today's Plan**
- Save workouts for later
- My Plan page with separate **Today's Plan** and **Saved** tabs
- Plan and Saved counters in the navbar
- Sort workouts by duration, calories, or rating
- Mark a workout as done or remove it from the plan
- Toast notifications after important actions
- Loading UI while workout data is loading
- Custom 404 page for invalid routes
- Workout details pages that can be opened directly from a URL

## 🛠️ Technologies Used

- **Next.js** - Used to build the website and handle routing
- **React** - Used to create reusable UI components
- **TypeScript** - Used for safer and clearer code
- **Tailwind CSS** - Used for styling and responsive layouts
- **DaisyUI** - Used for some ready-made UI styles
- **Font Awesome** - Used for icons
- **React Toastify** - Used for toast notifications
- **FitLog API** - Used to load workout data

## 🔌 API

The project gets workout data from the FitLog API.

### All workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### One workout

Replace `:id` with the workout ID:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## 📄 Pages and Routes

| Route | Description |
| --- | --- |
| `/` | Hero section and workout library |
| `/details/:id` | Details of one workout |
| `/my-plan` | Today's Plan and Saved workouts |
| Any invalid route | 404 page |

## 🚀 Run the Project Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
cd assignment-6
```

### 2. Install the packages

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the website

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Run the production build
npm run lint     # Check the code with ESLint
```

## 📱 Responsive Design

FitLog is designed to work on:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

The workout grid changes its number of columns depending on the screen size, and the hero section becomes stacked on smaller screens.

## 🌐 Deployment

The project can be deployed on Vercel, Netlify, Cloudflare Pages, or another Next.js-supported hosting platform.

Before submitting, make sure that:

- The production build finishes without errors
- The deployed website opens correctly
- Direct links such as `/my-plan` and `/details/:id` work after refreshing the page

## 📬 Submission

- **Live Link:** Add your deployed website link here
- **GitHub Repository Link:** Add your GitHub repository link here

## 📝 Assignment Information

- **60 marks deadline:** 26 September 2026, 11:59 PM
- **50 marks deadline:** 27 September 2026, 11:59 PM
- **30 marks deadline:** Any time after 27 September 2026

