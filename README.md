## MLera Linear Regression

 It is a pixel-perfect recreation of the Linear Regression learning module, built with Next.js 14, Tailwind CSS, and Recharts.

## 🚀 Live Links

Vercel Deployment: https://mlera-linear-regression.vercel.app/

GitHub Repository: https://github.com/Viidhii19/mlera-linear-regression


## 🛠️ Tech Stack

Framework: Next.js 14 (App Router)

Styling: Tailwind CSS (Custom Theme Configuration)

Visualization: Recharts (Interactive Scatter & Line Charts)

Icons: Lucide React

Theming: Next-themes (Dark/Light Mode)

Math Typesetting: KaTeX (Professional mathematical notation)

## ✨ Features

**Pixel-Perfect UI:** Recreated the "Introduction" and "Build" pages exactly as shown in the assignment video, including the specific Deep Purple (#0f0a1e) color palette.

**Interactive Graphs:**

- **Concept Visualization:** A scatter plot with draggable sliders for Slope and Intercept that updates the Mean Squared Error (MSE) in real-time.

- **Model Training:** A simulation of the training process showing the Regression Line fitting the data and the Cost Function decreasing over iterations.

**Dark/Light Mode:** A fully functional theme toggle that switches the entire application (including charts and borders) between Light and Dark modes.

**Responsive Design:** Fully adaptive layout that works seamlessly on desktop and mobile devices.

## 📂 Project Structure
```
src/
├── app/
│   ├── page.jsx              # Introduction / Content Page
│   ├── build/
│   │   └── page.jsx          # Model Building Page
│   ├── globals.css           # Global styles & Tailwind directives
│   ├── layout.jsx            # Main layout wrapper
│   └── providers.jsx         # Dark Mode Provider
└── components/
    ├── Navbar.jsx            # Responsive Navigation Bar
    ├── ThemeToggle.jsx       # Dark/Light Mode Switcher
    └── InteractiveGraph.jsx  # Reusable Chart Component
```
## 💻 Getting Started (Run Locally)

Clone the repository:

git clone [PASTE YOUR GITHUB LINK HERE]


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:3000 in your browser.

## Future Improvements

**Reset Functionality:** Adding a "Reset to Optimal" button on graphs.

**Progress Persistence:** Using local storage to save user progress (e.g., "Module 2/5") across sessions.

**Visual Progress Tracker:** A granular indicator for lesson completion to improve the user journey.