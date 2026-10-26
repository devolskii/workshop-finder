# Workshop Finder

A small app made for phones that helps you find workshops: search and filter them check if there are seats left and make a list of your choices. It's made for someone who uses a phone and wants to find a workshop and choose it without getting confused.

## Requirements

- Node.js 18+ and npm

## Run

```sh
npm install
npm run dev
```

**Local Development URL:** (usually) http://localhost:5173
**Deployment URL:** https://workshopfinder.netlify.app/

## Other scripts

```sh
npm run build     # build the app for production into the dist/ folder
npm run preview   # run the production build
```

## Tech stack

- React 19 and TypeScript Vite 8

- Tailwind CSS v4

- React Router v7 (for moving between pages)

- React Icons (for icons)

## Data

Workshop information is stored in a file called `src/data/workshops.ts` (four made-up workshops, one of which is full).

## Submission notes (explanation)

1. **User Need and Prioritization**
   - A person who is busy and uses a phone wants to find a workshop that's right for them check if there is a seat available and choose it without confusion.
   - I made a list that's easy to read (title, category, time seats) added a search by words and a way to filter by category a clear message when there are no results with an easy way to start over and a button that is not clickable and clearly marked for a workshop that is full.
   - The choices collect into a side summary with options to remove or sign up.

   **Assumptions:**
   - The list is a shortlist on the phone — real seat booking happens later so no server or login is needed;

   - The list is small and doesn't change, so filtering on title/category/time is enough no need for pages or sorting.

   - **Left out:** payment, accounts, data from a server, pages, sorting and saving data.

2. **Key Choices**:
   - React 19 and Vite with TypeScript and Tailwind CSS v4 for quick changes and responsive features
   - React Router for different screens
   - React Icons for easy to use icons; data stored in a typed file.
   - The list of choices is stored in the part of the app and shared with the side panel so the number of choices and the list stay the same.
   - Focus outlines and a message for screen readers help with keyboard and accessibility.

   **Trade-off:** using context to share the list keeps the parts simple but makes the pages depend on the part; a small list would be better for scaling.

3. **Checks, Gaps, Time, Help**
   - **Checked:** the production build works; tested at phone and computer sizes; used keyboard to move and click; Filters; full workshops can't be chosen; no results reset.

   - **Known issues:** no tests; signing up is not real; the list disappears after a refresh; no tracking.

   - **Time:** 2 hours including this explanation.

   - **Help:** Figma AI (for the look), Builder.io (to start the code), GitHub Copilot (for fixes), plus Vite/React/Tailwind/React Router/React Icons tools.
