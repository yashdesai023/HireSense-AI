import requests
import os

# Configuration
BASE_URL = "http://127.0.0.1:8000"
PARSE_ENDPOINT = f"{BASE_URL}/parse-resume"
SCORE_ENDPOINT = f"{BASE_URL}/score-resume"

# Define the path to the sample resume (adjust if your sample is different)
SAMPLE_RESUME_PATH = os.path.join(os.path.dirname(__file__), "samples", "YashDesai_TCS01.pdf")

# Define a sample job description for testing the scoring endpoint
JOB_DESCRIPTION = """
We are looking for a Senior Software Engineer with experience in Python, Java, and SQL.
Candidates should have at least 5 years of experience and a Bachelor's degree in Computer Science.
"""

def test_parse_resume():
    """
    Tests the /parse-resume endpoint by uploading a sample resume.
    Returns the parsed data if successful, None otherwise.
    """
    print("\n--- Testing Resume Parsing Endpoint ---")
    if not os.path.exists(SAMPLE_RESUME_PATH):
        print(f"Error: Sample resume not found at {SAMPLE_RESUME_PATH}")
        print("Please ensure 'dummy_resume.pdf' exists in the 'ml-service/samples/' directory.")
        return None

    with open(SAMPLE_RESUME_PATH, "rb") as f:
        # Prepare the file for multipart/form-data request
        files = {"file": (os.path.basename(SAMPLE_RESUME_PATH), f, "application/pdf")}
        try:
            response = requests.post(PARSE_ENDPOINT, files=files)
            response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
            
            parsed_data = response.json()
            print("Resume Parsing Successful:")
            print(parsed_data)
            return parsed_data

        except requests.exceptions.RequestException as e:
            print(f"Error calling parsing API: {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response content: {e.response.text}")
            return None

def test_score_resume(parsed_data):
    """
    Tests the /score-resume endpoint using the parsed resume data and a job description.
    """
    print("\n--- Testing Resume Scoring Endpoint ---")
    if not parsed_data:
        print("Skipping scoring test as resume parsing failed.")
        return

    # Prepare the payload for the scoring endpoint
    payload = {
        "parsed_resume_data": parsed_data,
        "job_description": JOB_DESCRIPTION
    }

    try:
        response = requests.post(SCORE_ENDPOINT, json=payload)
        response.raise_for_status()  # Raise an exception for bad status codes

        scoring_result = response.json()
        print("Resume Scoring Successful:")
        print(scoring_result)

    except requests.exceptions.RequestException as e:
        print(f"Error calling scoring API: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response content: {e.response.text}")

if __name__ == "__main__":
    # Instructions to run the tests:
    # 1. Ensure the FastAPI application is running (e.g., `uvicorn main:app --reload` in ml-service directory).
    # 2. Ensure you have a sample resume file named `dummy_resume.pdf` in the `ml-service/samples/` directory.
    # 3. Run this script: `python test_api.py`

    parsed_resume_data = test_parse_resume()
    if parsed_resume_data:
        test_score_resume(parsed_resume_data)
