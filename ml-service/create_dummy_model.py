from sklearn.linear_model import LogisticRegression
from joblib import dump
import numpy as np
import os

# Create a dummy model
# This model will simply predict based on some arbitrary logic for demonstration
# In a real scenario, this would be a trained model.
X = np.array([[10, 1, 0], [80, 5, 1], [30, 2, 0], [90, 10, 1]])
y = np.array([0, 1, 0, 1])

model = LogisticRegression()
model.fit(X, y)

# Ensure the models directory exists
models_dir = os.path.join(os.path.dirname(__file__), "models")
os.makedirs(models_dir, exist_ok=True)

# Save the dummy model
model_path = os.path.join(models_dir, "resume_scorer_model.joblib")
dump(model, model_path)

print(f"Dummy model saved to {model_path}")