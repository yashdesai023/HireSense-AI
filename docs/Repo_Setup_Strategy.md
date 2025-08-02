# 📘 HireSense AI Documentation

**Module:** Planning & Setup  
**Document:** GitHub Repo Setup Strategy  
**Author:** Yash Desai  
**Date:** July 2025  

---

# 🔧 GitHub Repo Setup Strategy — HireSense AI

This strategy ensures code organization, clean collaboration, and scalable version control across modules: React frontend, Java backend, Python ML, and DevOps.

---

## 📁 Repository Model

**Monorepo Structure**
- A single GitHub repository will contain all submodules: frontend, backend, ML, devops, docs.
- Makes CI/CD simpler, versioning unified, and documentation centralized.

```
hiresense-ai/
├── frontend/
├── backend/
├── ml-service/
├── devops/
├── docs/
└── shared/
```

---

## 🌿 Branching Strategy

Following a **Git Flow-inspired model**:

| Branch       | Purpose                                          |
|--------------|--------------------------------------------------|
| `main`       | Production-ready code; deployed version          |
| `dev`        | Active development base; merged from all features |
| `feature/*`  | One feature per branch (e.g., `feature/login-form`) |
| `bugfix/*`   | Fixes to existing features                       |
| `hotfix/*`   | Emergency production fixes                       |

### 👇 Workflow
```text
feature/* → dev → main
```

---

## 📛 Naming Conventions

### 🔹 Branch Names

* Use kebab-case:

  * `feature/user-auth`
  * `bugfix/duplicate-email`
  * `hotfix/api-timeout-fix`

### 🔹 Folder Names

* Java: `com.hiresense.controller`
* React: `jobListing`, `authPage`
* Python: `resume_scoring_model.py`, `video_analysis/`

---

## 📝 Commit Message Format

Use **Conventional Commits**:

```
<type>(scope): short summary

[optional body or link to issue]
```

### Example:

```text
feat(auth): add JWT login & token refresh logic

Closes #14
```

| Type       | Purpose                       |
| ---------- | ----------------------------- |
| `feat`     | New feature                   |
| `fix`      | Bug fix                       |
| `docs`     | Documentation changes         |
| `style`    | Code style (no logic changes) |
| `refactor` | Code restructuring            |
| `test`     | Add/update test cases         |
| `chore`    | Build, tooling, CI updates    |

---

## 📂 Tags & Releases

* Use semantic versioning: `v1.0.0`, `v1.1.0`, `v2.0.0`
* Tag each major feature-complete milestone on `main`

---

## ✅ Repo Setup Summary

| Area               | Strategy Used                       |
| ------------------ | ----------------------------------- |
| Repo type          | Monorepo                            |
| Branching model    | Git Flow                            |
| Branch naming      | `feature/*`, `bugfix/*`, `hotfix/*` |
| Commits            | Conventional Commits                |
| Folder naming      | Follows Java + React best practices |
| Release versioning | Semantic tags (`v1.0.0`)            |

---

© 2025 HireSense AI by Yash Desai — All Rights Reserved.
This document is part of the official HireSense AI open-source project. 