<!-- =============================== -->
# 📘 HireSense AI – API Specification
*Module: Database & API Design (Module 2)*  
*Maintained by: Yash Desai*  
*Last Updated: 2025-08-02*  
<!-- =============================== -->

---

## 📌 Overview

This document outlines the core RESTful API endpoints for **HireSense AI**, covering authentication, job posting, resume parsing, test handling, and admin operations. Each endpoint specifies HTTP methods, roles, request/response formats, and status codes.

---

## ✅ Authentication APIs (`/api/auth`)

### POST `/api/auth/register`
Registers a new user (Candidate, Recruiter).

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123",
  "role": "candidate"
}
```

**Response:**
```json
{
  "message": "Registration successful"
}
```

**Status Codes:** `201`, `400`, `409`

---

### POST `/api/auth/login`

Authenticates user and returns JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "role": "candidate"
}
```

**Status Codes:** `200`, `401`

---

## 💼 Job APIs (`/api/jobs`)

### GET `/api/jobs`

Get all available jobs (public route or for candidates).

**Response:**
```json
[
  {
    "job_id": 101,
    "title": "Java Developer",
    "company": "TechCorp",
    "location": "Remote"
  }
]
```

**Status Codes:** `200`

---

### POST `/api/jobs`

Create a new job (Recruiter only).

**Request Body:**
```json
{
  "title": "Java Developer",
  "description": "Spring Boot, Microservices",
  "location": "Remote",
  "posted_by": "recruiter_id"
}
```

**Response:**
```json
{
  "message": "Job posted successfully"
}
```

**Status Codes:** `201`, `400`

---

## 📎 Resume APIs (`/api/resume`)

### POST `/api/resume/upload`

Upload and parse resume (Candidate only).

**Request:** `multipart/form-data` with file

**Response:**
```json
{
  "message": "Resume uploaded",
  "parsed_skills": ["Java", "Spring", "REST"]
}
```

**Status Codes:** `200`, `415`, `500`

---

## 🧪 Test APIs (`/api/test`)

### POST `/api/test/submit`

Submit skill test answers (Candidate only).

**Request Body:**
```json
{
  "user_id": "candidate_123",
  "test_id": "java_test_01",
  "answers": ["A", "B", "C", "D"]
}
```

**Response:**
```json
{
  "score": 85,
  "result": "Passed"
}
```

**Status Codes:** `200`, `400`

---

### GET `/api/test/result/:user_id`

Get test result for a candidate.

**Response:**
```json
{
  "user_id": "candidate_123",
  "test_id": "java_test_01",
  "score": 85,
  "result": "Passed"
}
```

**Status Codes:** `200`, `404`

---

## 🛡️ Admin APIs (`/api/admin`)

### GET `/api/admin/users`

Fetch all users (Admin only).

**Response:**
```json
[
  {
    "id": "1",
    "email": "john@example.com",
    "role": "candidate"
  }
]
```

**Status Codes:** `200`, `403`

---

## 🔐 Headers (for protected routes)

```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

---

## 📁 API Versioning

All routes are prefixed with versioning:
Example: `/api/v1/jobs`

---

<!-- =============================== -->

# 🔚 End of API Specification

*HireSense AI – Empowering Smarter Hiring with AI*
[GitHub Repo](https://github.com/yashdesai-ai/HireSenseAI) | Maintained by Yash Desai

<!-- =============================== --> 