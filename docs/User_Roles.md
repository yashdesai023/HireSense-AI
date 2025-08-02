<!-- =============================== -->
# 👥 HireSense AI – User Roles & Permissions
*Module: Database & API Design (Module 2)*  
*Maintained by: Yash Desai*  
*Last Updated: 2025-08-02*  
<!-- =============================== -->

---

## 📌 Overview

This document describes the role-based access control system (RBAC) for **HireSense AI**. Each role has specific permissions and access rights, ensuring secure and structured use of the platform.

---

## 🧑‍💼 Role Summary

| Role       | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| **Admin**     | Platform owner. Manages users, jobs, tests, and system settings.            |
| **Recruiter** | Company-side user. Posts jobs, views applications, and filters candidates. |
| **Candidate** | Job-seeker. Uploads resumes, takes tests, and applies for jobs.            |

---

## 🔐 Role-Based Access Matrix

| Feature / Action                         | Admin | Recruiter | Candidate |
|------------------------------------------|:-----:|:---------:|:---------:|
| Register/Login                           | ✅    | ✅        | ✅        |
| View Dashboard                           | ✅    | ✅        | ✅        |
| Create Job Posting                       | ❌    | ✅        | ❌        |
| View All Posted Jobs                     | ✅    | ✅        | ✅        |
| Apply to a Job                           | ❌    | ❌        | ✅        |
| Upload Resume                            | ❌    | ❌        | ✅        |
| Take Skill Assessment                    | ❌    | ❌        | ✅        |
| View Candidate Profiles                  | ✅    | ✅        | ❌        |
| View Test Results                        | ✅    | ✅        | ✅ (own)  |
| Manage Users (View/Delete)               | ✅    | ❌        | ❌        |
| Manage Tests & Questions                 | ✅    | ❌        | ❌        |
| Access Admin Panel                       | ✅    | ❌        | ❌        |
| Manage Resume Parser / AI Logic          | ✅    | ❌        | ❌        |

---

## 🧠 Role Design Philosophy

- **Security First:** Candidate cannot access recruiter or admin routes.
- **Least Privilege:** Each user can only perform actions necessary for their goal.
- **Scalability Ready:** Roles can be extended later (e.g., Interviewer, HR).

---

## 🔐 API Role Enforcement Example

For a protected recruiter-only route:
```http
POST /api/v1/jobs
Headers:
Authorization: Bearer <jwt_token>
Role: recruiter
```

---

<!-- =============================== -->

# 🔚 End of User Roles & Permissions

*HireSense AI – Empowering Smarter Hiring with AI*
[GitHub Repo](https://github.com/yashdesai-ai/HireSenseAI) | Maintained by Yash Desai

<!-- =============================== --> 