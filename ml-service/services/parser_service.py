import re
from io import BytesIO
from pdfminer.high_level import extract_text as extract_text_from_pdf
from docx import Document

async def parse_resume(file):
    content = await file.read()
    file_type = file.content_type

    text = ""
    if file_type == "application/pdf":
        text = extract_text_from_pdf(BytesIO(content))
    elif file_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        doc = Document(BytesIO(content))
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
    else:
        raise ValueError("Unsupported file type")

    # Basic extraction using regex (can be improved with more sophisticated NLP)
    name = extract_name(text)
    email = extract_email(text)
    education = extract_education(text)
    skills = extract_skills(text)
    experience = extract_experience(text)

    return {
        "name": name,
        "email": email,
        "education": education,
        "skills": skills,
        "experience": experience,
        "full_text": text # For debugging/further analysis
    }

def extract_name(text):
    # Simple regex for name (can be highly inaccurate)
    # Looks for two or three words at the beginning of the text, often capitalized
    match = re.search(r"^[A-Z][a-z]+(?:\s[A-Z][a-z]+){1,2}", text)
    return match.group(0).strip() if match else None

def extract_email(text):
    match = re.search(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b", text)
    return match.group(0) if match else None

def extract_education(text):
    # Looks for common education keywords and captures the following line or two
    education_keywords = ["education", "academic background", "qualifications"]
    for keyword in education_keywords:
        match = re.search(f"(?i){keyword}.*?\n([\s\S]*?)(?:\n\n|\Z)", text)
        if match:
            # Further refine to capture actual degrees/institutions
            return match.group(1).strip()
    return None

def extract_skills(text):
    # This is a very basic example. A real solution would need a predefined list of skills
    # or more advanced NLP techniques.
    skills_keywords = ["skills", "technical skills", "proficiencies"]
    for keyword in skills_keywords:
        match = re.search(f"(?i){keyword}.*?\n([\s\S]*?)(?:\n\n|\Z)", text)
        if match:
            # Split by common delimiters like commas, newlines, etc.
            return [s.strip() for s in re.split(r"[,\n\-]", match.group(1)) if s.strip()]
    return []

def extract_experience(text):
    # Looks for "experience" and captures the following section
    experience_keywords = ["experience", "work experience", "professional experience"]
    for keyword in experience_keywords:
        match = re.search(f"(?i){keyword}.*?\n([\s\S]*?)(?:\n\n|\Z)", text)
        if match:
            return match.group(1).strip()
    return None
