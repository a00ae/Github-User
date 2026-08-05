# GitHub User Finder (React + TypeScript + Vite)

[![Live Demo](https://shields.io)]([https://github.io](https://a00ae.github.io/Github-User/))

A sleek, responsive, and type-safe web application that interacts with the official GitHub REST API to fetch and display real-time developer profiles, repository statistics, and user data. Built from scratch using modern frontend practices.

## 🚀 Live Preview
Check out the live interactive application here: **[Live Demo Link](https://a00ae.github.io/Github-User/)**

## 🛠️ Tech Stack
* **Framework:** React 18 (Functional Components & Hooks)
* **Type Safety:** TypeScript (Interfaces for GitHub API responses)
* **Build Tool:** Vite (For lightning-fast compilation and development)
* **API Handling:** Fetch / Axios (Asynchronous data fetching with loading states)
* **Styling:** CSS / SCSS (Modern responsive layout)

## ✨ Key Features
* **Real-time API Integration:** Seamless integration with GitHub REST API to query any public username.
* **Comprehensive Metrics:** Displays critical user insights including follower counts, public repos, bio, creation dates, and organization links.
* **Robust Error Handling:** Smooth UI transitions for loading states, and explicit alerts for "User Not Found" errors to guarantee a solid UX.
* **Strict Typing:** Leverage TypeScript to map API JSON structures into reliable components, eliminating common runtime undefined errors.
* **Fully Responsive UI:** Clean design optimized for desktop, tablet, and mobile device viewports.

## 📂 Project Structure Highlights
The project uses strict engineering structures:
* Decoupled API logic from the UI presentation components.
* Strict linting rules utilizing Vite's ESLint compiler options.
* Scalable directories inside `/src` to separate views, types, and assets.

## ⚙️ Local Development
To get this project running on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/a00ae/Github-User.git
   ```
2. Navigate into the folder:
   ```bash
   cd Github-User
   ```
3. Install dependencies:
   ```bash
   pnpm install  # or npm install
   ```
4. Start the development server:
   ```bash
   pnpm dev      # or npm run dev
   ```
