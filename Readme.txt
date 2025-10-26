🧠 MindTrack Student Well-being Dashboard

MindTrack is a dual-interface web application designed to help students monitor their academic performance (CGPA) and lifestyle factors such as Sleep, Study Time, Stress, and more.
It calculates a composite 🎯 Risk Probability and provides actionable alerts to support well-being.

The system includes:
👩‍🎓 Student Dashboard for personal tracking & insights
👨‍🏫 Admin Dashboard for campus-wide monitoring and analysis

🌟 Key Features
🎓 Student Dashboard

📝 Daily Data Input: Enter CGPA, Sleep Hours, Stress Level, Study Time, Social Time, and Exercise duration.

⚙️ Real-time Risk Calculation: Instantly computes a Risk Score (0–100%) using weighted thresholds.

📊 Metric Cards: Show key stats — CGPA, Avg Sleep, Stress, etc.

🌈 Lifestyle Radar Chart: Visualizes lifestyle balance and habits.

🌙 Dark Mode Toggle: Sleek SVG-based switch for a smooth UI theme change.

🧑‍💼 Admin Dashboard

📈 Aggregate Metrics: Displays campus-wide averages of CGPA, Attendance, Stress, and Sleep.

🔍 Trend Analysis: Uses Line and Bar Charts to show academic and lifestyle trends.

🚨 Predictive Risk Table: Highlights at-risk students and suggests interventions (e.g., Refer to Counselor).

🔗 Correlation Charts: Explore patterns such as Sleep vs CGPA (Scatter) and Stress vs Sleep (Bubble).

🌐 Live Deployment

🚀 Access the application here:
👉 MindTrack Dashboard (Vercel)
https://student-well-being-dashboard-33k2.vercel.app/

🔑 Login Credentials (Demo)

👩‍🎓 Student Access

Username: student1

Password: 123

👨‍🏫 Admin Access

Username: admin1

Password: 1234

🛠️ Technical Stack

💻 Frontend: HTML5, CSS3, JavaScript (ES6+)

🎨 Styling: Custom CSS with CSS Variables (Dark/Light Mode Support)

📉 Visualization: Chart.js
 for Radar, Line, Scatter, Bubble & Bar Charts

☁️ Deployment: Vercel (or any preferred hosting platform)

📸 Screenshots
🧍‍♀️ Student Dashboard – Data Input & Risk View


Real-time monitoring with instant risk feedback.

🧑‍🏫 Admin Dashboard – Overview
![Alt text](Frontend/Screen-shot/student.png)

Displays key metrics, trends, and predictive alerts.

🔐 MindTrack Login Portal

Unified access for both students and administrators.

⚙️ Local Setup Guide

Follow these simple steps to run MindTrack locally:

📦 Clone the repository:

git clone [YOUR_REPO_URL_HERE]
cd MindTrack-Dashboard


🌐 Open the Files (Frontend-only):

Login Page: /Login-Page/index.html

Student Dashboard: /Frontend/Dash-Board/student/index.html (after login)

🔥 Run a Local Server (Recommended):

Using VS Code:
→ Install Live Server extension
→ Right-click Login-Page/index.html → “Open with Live Server”

Using Python:

python -m http.server


→ Open http://localhost:8000