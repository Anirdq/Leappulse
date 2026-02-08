# Leap Pulse MVP 🚀

**Leap Pulse** is a gamified engagement feature for the LeapScholar IELTS product, designed to boost user retention through daily speaking practice and social competition.

![Leap Pulse Demo](https://via.placeholder.com/800x400?text=Leap+Pulse+Dashboard) 
*(Replace with actual screenshot after uploading)*

## ✨ Features

### 1. Daily Sprint (Phase 1)
- **Mobile-First Dashboard**: A clean, responsive UI optimized for mobile devices.
- **Daily Prompt**: "Speak about a memorable journey" (IELTS Speaking Part 2 style).

### 2. Audio Recorder & Evaluation (Phase 2)
- **Instant Recording**: Capture microphone input directly in the browser.
- **Real-time Feedback**: 
  - **Client-Side Mock (Current)**: Simulates AI evaluation for instant demo feedback without a backend.
  - **Backend Ready**: Includes a FastAPI backend structure for real-integration with OpenAI Whisper & GPT-4o.

### 3. Syndicate Leaderboard (Phase 3)
- **Social Gamification**: Displays a simulated 5-member study group.
- **Live Updates**: Real-time simulation of streak and point updates to create a sense of activity.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), TailwindCSS
- **Backend**: FastAPI (Python)
- **Deployment**: Vercel (Frontend)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/leappulse.git
cd leappulse
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The app will run at `http://localhost:5173`.

### 3. Backend Setup (Optional for Demo)
*Note: The current frontend is configured to use the Client-Side Mock. To use the real backend, revert the changes in `AudioRecorder.jsx`.*

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
source venv/bin/activate # Mac/Linux
pip install -r requirements.txt
uvicorn app.main:app --reload
```
The API will run at `http://localhost:8000`.

---

## 📂 Project Structure

```text
ielts/
├── frontend/           # React Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── DailySprintCard.jsx
│   │   │   ├── AudioRecorder.jsx
│   │   │   └── Leaderboard.jsx
│   │   └── App.jsx
│   └── ...
├── backend/            # FastAPI Application
│   ├── app/
│   │   ├── main.py
│   │   └── api.py
│   └── requirements.txt
└── README.md
```

## 🤝 Contributing
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
