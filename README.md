# CalAI — AI Calorie Tracker

A Cal AI clone built with React Native (Expo) + Claude Vision API.

## Features
- 📷 Camera/photo upload → Claude AI food recognition → instant macro breakdown
- 📓 Daily food diary with per-meal grouping and running calorie total
- 💍 Macro progress rings (protein / carbs / fat)
- 📊 Weekly history bar charts
- 🔥 Streak tracking

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Anthropic API key
Open `src/utils/theme.js` and replace:
```js
export const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';
```
Get a key at https://console.anthropic.com

### 3. Run the app
```bash
npx expo start
```
Scan the QR code with the **Expo Go** app on your iPhone, or press `i` to open in iOS Simulator.

## Project Structure
```
CalAI/
├── App.js                  # Root navigation
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js   # Dashboard, calorie ring, streak
│   │   ├── ScanScreen.js   # AI camera analysis
│   │   ├── DiaryScreen.js  # Food log by meal
│   │   └── ProgressScreen.js # Charts & goals
│   ├── components/
│   │   ├── CalorieRing.js  # Large SVG calorie ring
│   │   ├── MacroRing.js    # Small macro progress rings
│   │   ├── DiaryEntry.js   # Single food log row
│   │   └── WeekBarChart.js # Weekly bar chart
│   ├── context/
│   │   └── AppContext.js   # Global state
│   └── utils/
│       ├── api.js          # Anthropic Claude Vision API
│       └── theme.js        # Colors & constants
└── ai-logs/                # AI conversation logs (required for submission)
```

## AI Logging
Per the challenge requirements, all AI conversation logs are stored in `/ai-logs/`.
See that folder for the full development conversation history.
