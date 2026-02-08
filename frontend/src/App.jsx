import React from 'react';
import DailySprintCard from './components/DailySprintCard';
import AudioRecorder from './components/AudioRecorder';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Leap <span className="text-indigo-600">Pulse</span>
        </h1>
        <p className="mt-2 text-gray-600">Your daily IELTS engagement booster</p>
      </header>

      <main className="w-full flex flex-col items-center space-y-6">
        <DailySprintCard />

        {/* Placeholders for future components */}
        <AudioRecorder />
        <Leaderboard />
      </main>
    </div>
  );
}

export default App;
