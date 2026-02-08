from fastapi import APIRouter, UploadFile, File
import time
import random

router = APIRouter()

@router.post("/evaluate")
async def evaluate_audio(file: UploadFile = File(...)):
    """
    Mock endpoint to evaluate audio.
    Simulates processing time and returns a mock Band Score.
    """
    # Simulate processing time (< 3s goal)
    time.sleep(1.5) 
    
    # Mock response
    return {
        "band_score": round(random.uniform(5.5, 9.0), 1),
        "feedback": "Good fluency, but try to use more varied vocabulary.",
        "fluency": 7.5,
        "vocabulary": 6.5,
        "grammar": 7.0,
        "pronunciation": 8.0,
        "processing_time_ms": 1500
    }
