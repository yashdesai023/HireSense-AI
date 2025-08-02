

# 📘 HireSense AI Documentation

**Module:** Planning & Setup  
**Document:** Folder Structure Design  
**Author:** Yash Desai  
**Date:** July 2025  

---

# 🗂️ Folder Structure Design — HireSense AI

This document outlines the planned folder structure for the HireSense AI monorepo, designed for modularity, clarity, and collaboration. It follows proven conventions from top Java + React open-source projects.

---

## 🎯 Structure Philosophy

- Clear separation of concerns: Frontend, Backend, ML, DevOps, Shared
- Scalable layers: Controller → Service → Repository → Model (Backend)
- Reusable modules: Hooks, Contexts, Components (Frontend)
- Isolated microservice for ML workloads
- Dedicated DevOps folder for CI/CD, Docker, K8s, Infra

---

## 📦 Monorepo Overview

```

hiresense-ai/
├── frontend/              # React + Tailwind CSS UI
├── backend/               # Java Spring Boot REST APIs
├── ml-service/            # Python-based ML microservice
├── devops/                # Docker, K8s, CI/CD, Terraform
├── shared/                # Common types and OpenAPI contracts
├── docs/                  # Visuals, diagrams, planning docs
├── docker-compose.yml     # Local development entrypoint
└── README.md

```

---

## 🌐 Frontend Folder Structure

```

frontend/
├── src/
│   ├── components/
│   │   ├── common/         # Buttons, Modals
│   │   └── features/       # JobListing, CandidateCard
│   ├── pages/              # Route-based pages
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API communication layer
│   ├── contexts/           # Auth, Theme, User state
│   ├── config/             # API endpoints, constants
│   ├── styles/             # Global styles, themes
│   ├── assets/             # Images, videos, icons
│   └── utils/              # Formatter, validators
├── public/
└── Dockerfile

```

---

## 🔙 Backend Folder Structure

```

backend/
├── src/main/java/com/hiresense/
│   ├── controller/         # REST endpoints
│   ├── service/            # Business logic
│   ├── repository/         # JPA Repositories
│   ├── model/              # Entities
│   ├── dto/                # Request/Response DTOs
│   ├── config/             # DB, Swagger, Security configs
│   ├── security/           # JWT, Auth filters
│   ├── exception/          # Global error handling
│   └── util/               # Common helpers
├── src/main/resources/
│   ├── application.properties
│   └── db/migration/       # Flyway SQL scripts
├── src/test/
└── Dockerfile

```

---

## 🧠 ML Service Folder Structure

```

ml-service/
├── models/                # Trained model binaries
├── api/                   # FastAPI endpoints
├── routes/                # API route definitions
├── services/              # Model invocation logic
├── config/                # CORS, logging, env configs
├── utils/                 # Preprocessing, scoring logic
├── requirements.txt
└── Dockerfile

```

---

## ⚙️ DevOps + Infra Folder Structure

```

devops/
├── docker/
│   ├── backend/
│   ├── frontend/
│   └── database/
├── kubernetes/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   └── ingress.yaml
├── terraform/
│   ├── environments/
│   └── modules/
├── ci-cd/
│   ├── github-actions/
│   └── scripts/

```

---

## 🔄 Shared Module Folder

```

shared/
├── api-contracts/
│   └── openapi/
│       ├── user-api.yaml
│       └── job-api.yaml
├── common-types/
│   ├── enums/
│   └── constants/

```

---

## 📁 Docs Folder (Planning & Visuals)

```

docs/
├── Project\_Overview\.md
├── Tech\_Stack\_Justification.md
├── Folder\_Structure\_Design.md
├── system-architecture-diagram.png
├── folder-tree.png
└── user-role-flow\.png

```

---

## ✅ Summary

This structure ensures:
- Scalability from MVP to enterprise
- Modular team collaboration
- Clean DevOps deployment pipeline
- Solid documentation separation

---

© 2025 HireSense AI by Yash Desai — All Rights Reserved.  
This document is part of the official HireSense AI open-source project.

