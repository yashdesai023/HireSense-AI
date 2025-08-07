import os
from sklearn.linear_model import LogisticRegression
from joblib import dump

model_dir = 'e:\Private\CognitiveCrafts\HireSense AI\ml-service\models'
os.makedirs(model_dir, exist_ok=True)

model = LogisticRegression()
dump(model, os.path.join(model_dir, 'resume_scorer_model.joblib'))

