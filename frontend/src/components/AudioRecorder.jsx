import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [evaluation, setEvaluation] = useState(null);
    const [loading, setLoading] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
                chunksRef.current = [];
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            setEvaluation(null); // Reset previous evaluation
        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert("Error accessing microphone. Please ensure permissions are granted.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            // Stop all tracks to release microphone
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const submitAudio = async () => {
        if (!audioBlob) return;

        setLoading(true);

        // Mock evaluation for client-side demo (Backend replacement)
        try {
            // Simulate network delay (1.5s)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Mock response data (same as backend)
            const mockResult = {
                band_score: (5.5 + Math.random() * 3.5).toFixed(1), // Random score between 5.5 and 9.0
                feedback: "Good fluency, but try to use more varied vocabulary. (Client-side Mock)",
                fluency: 7.5,
                vocabulary: 6.5,
                grammar: 7.0,
                pronunciation: 8.0,
                processing_time_ms: 1500
            };

            setEvaluation(mockResult);
        } catch (error) {
            console.error("Error submitting audio:", error);
            alert("Failed to evaluate.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Audio Recorder (Phase 2)</h2>

            <div className="flex flex-col items-center space-y-4">
                {!isRecording ? (
                    <button
                        onClick={startRecording}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        Start Recording
                    </button>
                ) : (
                    <button
                        onClick={stopRecording}
                        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md flex items-center animate-pulse"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                        Stop Recording
                    </button>
                )}

                {audioBlob && !isRecording && (
                    <div className="w-full flex flex-col items-center space-y-3">
                        <audio src={URL.createObjectURL(audioBlob)} controls className="w-full" />

                        <button
                            onClick={submitAudio}
                            disabled={loading}
                            className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-300 ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg'
                                }`}
                        >
                            {loading ? 'Evaluating...' : 'Get Instant Evaluation'}
                        </button>
                    </div>
                )}

                {evaluation && (
                    <div className="w-full mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                        <h3 className="text-lg font-bold text-green-800 mb-2">Result: Band {evaluation.band_score}</h3>
                        <p className="text-sm text-green-700 mb-2"><strong>Feedback:</strong> {evaluation.feedback}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                            <div>Fluency: {evaluation.fluency}</div>
                            <div>Vocab: {evaluation.vocabulary}</div>
                            <div>Grammar: {evaluation.grammar}</div>
                            <div>Pronunciation: {evaluation.pronunciation}</div>
                        </div>
                        <div className="mt-2 text-xs text-gray-400 text-right">
                            Processed in {evaluation.processing_time_ms}ms
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AudioRecorder;
