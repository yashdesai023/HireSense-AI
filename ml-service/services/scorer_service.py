import re
from joblib import load
import os
import numpy as np

# Path to the pre-trained model
model_path = os.path.join(os.path.dirname(__file__), "..", "models", "resume_scorer_model.joblib")
model = None
try:
    # Attempt to load the model
    model = load(model_path)
    print(f"Successfully loaded model from {model_path}")
except FileNotFoundError:
    print(f"Warning: Model file not found at {model_path}. Using dummy scoring.")
except Exception as e:
    print(f"Error loading model from {model_path}: {e}. Using dummy scoring.")

def extract_features(parsed_resume_data: dict, job_description: str):
    """
    Extracts features from resume and job description to be used for scoring.
    This is a simplified feature extraction process.
    """
    # Feature 1: Skill match
    resume_skills = set(s.lower() for s in parsed_resume_data.get("skills", []))
    job_desc_skills = set(s.lower() for s in re.findall(r'\b[a-zA-Z0-9_\-]+\b', job_description))
    
    matched_skills = len(resume_skills.intersection(job_desc_skills))
    total_job_skills = len(job_desc_skills)
    skill_match_score = (matched_skills / total_job_skills) * 100 if total_job_skills > 0 else 0

    # Feature 2: Experience
    # This is a placeholder. A more sophisticated approach would parse dates and calculate years.
    experience_text = parsed_resume_data.get("experience", "")
    years_of_experience = len(re.findall(r'\d+\s*(?:year|yr)', experience_text, re.IGNORECASE))
    
    # Feature 3: Education
    education_level = 0
    if parsed_resume_data.get("education"):
        education_level = 1

    return np.array([skill_match_score, years_of_experience, education_level]).reshape(1, -1)

async def score_resume(parsed_resume_data: dict, job_description: str):
    """
    Scores a resume based on parsed data and a job description.
    """
    features = extract_features(parsed_resume_data, job_description)

    # The dummy model is not trained, so the prediction is not meaningful.
    # This demonstrates the prediction pipeline.
    try:
        # The model expects a 2D array.
        model_prediction = model.predict_proba(features)[0][1]  # Get probability of positive class
        fit_score = int(model_prediction * 100)
    except Exception as e:
        # Fallback to a simple score if the model fails
        print(f"Model prediction failed: {e}. Falling back to basic scoring.")
        fit_score = int(features[0, 0]) # Use skill match score

    fit_score = min(max(fit_score, 0), 100)

    category = "Low"
    if fit_score >= 75:
        category = "High"
    elif fit_score >= 50:
        category = "Medium"

    return {
        "fit_score": fit_score,
        "category": category,
        "details": {
            "skill_match": f"{features[0, 0]:.2f}%",
            "experience_years": features[0, 1]
        }
    }