from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
from services.parser_service import parse_resume

router = APIRouter()

@router.post("/parse-resume")
async def parse_resume_endpoint(file: UploadFile = File(...)):
    """
    Accepts a resume file (PDF/DOCX) and returns extracted information.
    """
    if file.content_type not in ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]:
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF and DOCX are supported.")

    try:
        extracted_data = await parse_resume(file)
        return extracted_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error parsing resume: {e}")