from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from ..services.scorer_service import score_resume

router = APIRouter()

class ResumeScoreRequest(BaseModel):
    parsed_resume_data: dict
    job_description: str

@router.post("/score-resume")
async def score_resume_endpoint(request: ResumeScoreRequest):
    """
    Accepts parsed resume data and a job description, then returns a fit score.
    """
    try:
        fit_score_data = await score_resume(request.parsed_resume_data, request.job_description)
        return fit_score_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error scoring resume: {e}")
