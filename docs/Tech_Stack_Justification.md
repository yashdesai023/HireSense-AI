
# 📘 HireSense AI Documentation

**Module:** Planning & Setup  
**Document:** Tech Stack Justification  
**Author:** Yash Desai  
**Date:** July 2025  


# 🧱 Tech Stack Justification — HireSense AI

This document explains the rationale behind each technology used in the HireSense AI platform, selected to balance performance, scalability, learning alignment, and enterprise readiness.

---

## 🎯 Project Stack Overview

| Layer            | Technology                      | Reasoning |
|------------------|----------------------------------|-----------|
| Frontend         | React.js + Tailwind CSS          | Modern, component-based UI; highly maintainable; responsive design |
| Backend (API)    | Spring Boot (Java)               | Enterprise-ready; secure; supports layered architecture and microservices |
| ML API Service   | Python (Scikit-learn, PyTorch) + FastAPI | Ideal for rapid development and serving ML models; async support |
| Database         | MySQL                            | Reliable relational DB; scalable and open-source |
| DevOps           | Docker, GitHub Actions, K8s (optional) | Containerization + automation for CI/CD pipelines and cloud-native readiness |
| Infra Mgmt       | Terraform (optional)             | Infrastructure as code; scalable and reproducible environments |

---

## 🔍 Why This Stack?

### 🔹 Frontend: React + Tailwind CSS
- Fast rendering using Virtual DOM
- Component reusability
- Tailwind allows atomic, utility-first CSS — avoids bloated stylesheets

### 🔹 Backend: Spring Boot (Java)
- Supports RESTful APIs with security and exception handling out of the box
- Easy integration with databases, JWT authentication, and service layers
- Leverages your strong Java foundation

### 🔹 ML Models: Python + FastAPI
- Python is ideal for training and serving ML
