import re
from joblib import load
import os

# Load the pre-trained model
model_path = os.path.join(os.path.dirname(__file__), "..", "models", "resume_scorer_model.joblib")
model = load(model_path)

async def score_resume(parsed_resume_data: dict, job_description: str):
    # This is a placeholder for actual scoring logic.
    # In a real scenario, you would extract features from parsed_resume_data and job_description,
    # then use the loaded ML model to predict a score.

    # For demonstration, let's create a very basic scoring based on keyword matching
    # and a dummy model prediction.

    # Simple keyword matching for skills
    resume_skills = set(s.lower() for s in parsed_resume_data.get("skills", []))
    job_desc_skills = set(s.lower() for s in re.findall(r'\b[a-zA-Z0-9_\-]+\b', job_description))

    matched_skills = len(resume_skills.intersection(job_desc_skills))
    total_job_skills = len(job_desc_skills)

    skill_match_score = 0
    if total_job_skills > 0:
        skill_match_score = (matched_skills / total_job_skills) * 50  # Max 50 points for skills

    # Dummy score based on experience (more experience = higher score)
    experience_text = parsed_resume_data.get("experience", "")
    years_of_experience = len(re.findall(r'\d+\s*(?:year|yr)', experience_text, re.IGNORECASE)) * 5 # Dummy calculation
    experience_score = min(years_of_experience, 30) # Max 30 points for experience

    # Dummy score for education (presence of education = higher score)
    education_score = 0
    if parsed_resume_data.get("education"):
        education_score = 20 # Max 20 points for education

    # Total dummy score
    fit_score = int(skill_match_score + experience_score + education_score)
    fit_score = min(max(fit_score, 0), 100) # Ensure score is between 0 and 100

    # Dummy category based on fit_score
    category = "Low"
    if fit_score >= 75:
        category = "High"
    elif fit_score >= 50:
        category = "Medium"

    # In a real scenario, you would prepare features for the ML model
    # For now, let's just use a dummy prediction from the loaded model
    # This part needs actual feature engineering and training data
    try:
        # Dummy feature array for prediction (e.g., [skill_match_score, experience_score, education_score])
        # The model expects a 2D array, even for a single sample
        dummy_features = [[skill_match_score, experience_score, education_score]]
        model_prediction = model.predict(dummy_features)[0]
        # You would map model_prediction to a more refined score or category
    except Exception as e:
        print(f"Error during dummy model prediction: {e}")
        model_prediction = "N/A"

    return {
        "fit_score": fit_score,
        "category": category,
        "model_prediction": str(model_prediction) # Convert to string for JSON serialization
    }
