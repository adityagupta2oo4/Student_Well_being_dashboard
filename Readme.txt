# 🧠 MindTrack Student Well-being Dashboard

MindTrack is a dual-interface web application designed to help students monitor their academic performance (CGPA) and lifestyle factors (Sleep, Study Time, Stress, etc.). It calculates a composite **Risk Probability** and provides actionable alerts. The system features a Student Dashboard for personal data input and visualization, and an Admin Dashboard for holistic campus-wide risk monitoring.

## 🌟 Features

### Student Dashboard (Frontend)
* **Daily Data Input:** Students can input their current CGPA, Sleep, Stress, Study Time, Social Time, and Exercise.
* **Real-time Risk Calculation:** A composite risk score (0-100%) is calculated instantly based on input parameters and established thresholds.
* **Metric Cards:** Displays current key metrics like CGPA, Avg Sleep, and Stress.
* **Visualizations:** Features a **Lifestyle Radar Chart** to visualize the balance between different life factors.
* **Theme Toggle:** Includes a modern **Dark Mode** toggle with a sleek SVG switch.

### Admin Dashboard (Monitoring)
* **Aggregate Metrics:** Displays average CGPA, Attendance, Stress Score, and Sleep across the student body.
* **Trend Analysis:** Uses Line Charts (Yearly CGPA Trend) and Bar Charts (Attendance Trend) to monitor overall student performance.
* **Predictive Risk Table:** Lists flagged students based on their computed risk score, suggesting immediate actions (e.g., "Refer to counselor").
* **Correlation Charts:** Includes charts like **Sleep vs CGPA** (Scatter plot) and **Stress vs Sleep** (Bubble chart) to identify campus-wide well-being patterns.

## 🚀 Deployed Site

The application is deployed and accessible here:

**[Placeholder: INSERT YOUR DEPLOYED SITE URL HERE]**

## 🔑 Access Credentials

To access the different portals for demonstration and testing:

| Portal | Username (ID) | Password |
| :--- | :--- | :--- |
| **Student Portal** | `student1` | `123` |
| **Admin Portal** | `admin1` | `1234` |

---

## 🛠️ Technical Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** Custom CSS with CSS Variables for seamless Dark Mode.
* **Visualization:** **Chart.js** library for powerful data plotting (Radar, Line, Scatter, Bubble, Bar charts).
* **Deployment:** (Specify your hosting platform, e.g., GitHub Pages, Netlify, Vercel)

---

## 📸 Screenshots

### Student Dashboard - Data Input & Risk View
Shows the core personal monitoring interface with real-time risk feedback.
![Student Dashboard - Light Mode with 8.0 CGPA Input](screenshots/Screenshot_2025-10-26_095035.jpg)

### Admin Dashboard - Overview
Provides aggregate metrics and trend visualization for campus monitoring.
![Admin Dashboard - Overview of CGPA, Sleep, and Stress Trends](screenshots/Screenshot_2025-10-26_095106.png)

### MindTrack Login Portal
The unified entry point for both student and admin access.
![MindTrack Login Portal with Dark Mode Toggle](screenshots/Screenshot_2025-10-26_095043.jpg)

---

## ⚙️ Local Setup Instructions

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [Placeholder: INSERT YOUR REPO URL HERE]
    cd MindTrack-Dashboard
    ```

2.  **Open the Files:**
    The project is purely frontend (HTML/CSS/JS). You can open the main files directly in your browser:
    * **Login Page:** `[root]/Login-Page/index.html`
    * **Student Dashboard:** `[root]/Frontend/Dash-Board/student/index.html` (Requires logging in first)

3.  **Start a Local Server (Recommended):**
    For optimal loading and script execution, especially if you have a complex file structure, it's best to run a simple local web server:
    * **Using VS Code:** Install the "Live Server" extension and right-click `Login-Page/index.html` to "Open with Live Server".
    * **Using Python:** Run `python -m http.server` in the project root directory and navigate to `http://localhost:8000`.

---
