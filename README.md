
# App Store Frontend Simulation 

## 🚀 Project Summary 

This project is a modern, responsive single-page application (SPA) designed to simulate the core functionalities of a mobile application store. It features multiple views for browsing, searching, and managing app installations, with data persistence handled via **LocalStorage**. The application emphasizes a clean user interface, efficient state management, and an enhanced user experience with loading animations and data visualization.

## ✨ Features

### 1. Home Page
* **Banner:** Center-aligned heading, text, and two action buttons (`App Store` and `Play Store` redirection).
* **States Section:** Displays three key state cards as per design.
* **Top Apps:** Shows the top eight apps in a four-column layout, with links to the App Details page and a "Show All" link to the All Apps page.

### 2. All Apps Page
* **Search & Filter:** Implements **live, case-insensitive search** by app title. Displays a "No App Found" message if the search yields no results.
* **Sort by Downloads:** A dropdown to sort the displayed apps by download count: **High-Low** (descending) and **Low-High** (ascending).
* **App List:** Displays all apps from the JSON data with title, image, download count, and average rating.

### 3. App Details Page
* **App Information:** Detailed view of a single app, including image, title, rating, downloads, and reviews.
* **Installation Feature:**
    * **Install Button:** Saves the app to **LocalStorage** upon click. The button disables and changes text to "Installed."
    * A **Success Toast** message confirms the installation.
* **Review Chart:** A responsive chart implemented using the **Recharts library** to visualize app review data.

### 4. My Installation Page (LocalStorage Feature)
* Displays a list of all apps currently installed (stored in **LocalStorage**).
* **Uninstall Button:** Removes the app from both the UI and **LocalStorage**. A **Toast** message confirms the uninstallation.

### 5. Error Handling & UX Enhancements
* **Custom Error Page:** For invalid routes (404).
* **Loading Animation:** A visual loading state is shown during page navigation and search operations.
* **Not Found Message:** A relevant message is displayed if an app is not found on the App Details page.
* **Deployment Ready:** Ensures all routes function correctly upon page reload after deployment.

## 🛠️ Technology Stack

* **Frontend Framework:** [Specify Framework/Library, React]
* **Styling:** [Specify Styling Method, e.g., CSS Modules, Styled Components, Tailwind CSS]
* **Routing:** [Specify Router, e.g., React Router DOM]
* **Data Visualization:** **Recharts**
* **State Management:** **LocalStorage** for persistence
* **Data Source:** JSON data

