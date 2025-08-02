# HireSense AI 👨‍💻🤖

**HireSense AI** is an intelligent hiring and skill evaluation platform that helps companies find the right talent using machine learning, code assessments, and smart dashboards.

## 🔍 Project Goals

- Reduce human bias in hiring
- Automate skill-based screening
- Offer real-time analytics to recruiters

## 🚀 Features

- AI-Powered Code + Soft Skill + Resume Evaluation
- Video Interview & Facial Analysis
- Smart Dashboards for Recruiters
- Role-based Access (Admin, Recruiter, Candidate)
- Test Creation, Job Posting, Application Tracking

## 🛠️ Tech Stack

| Layer       | Stack Used                        |
|-------------|-----------------------------------|
| Frontend    | React.js + Tailwind CSS           |
| Backend     | Java with Spring Boot             |
| ML Models   | Python (Scikit-learn / PyTorch)   |
| Database    | MySQL                             |
| DevOps      | Docker, GitHub Actions            |

## 📁 Project Structure

```
HireSense AI/
├── frontend/          # React + Tailwind UI
├── backend/           # Java Spring Boot APIs
├── ml-service/        # Python FastAPI ML Service
├── devops/            # Docker, CI/CD, Infrastructure
├── docs/              # Documentation & Architecture
│   ├── Visual Diagrams/  # Interactive Visual Diagrams
│   └── *.md            # Technical Documentation
├── images/            # Project Assets & Logo
└── README.md          # Project Overview
```

## 📚 Documentation & Architecture

### 🏗️ **System Architecture**
- **[System Architecture Visual](docs/Visual%20Diagrams/architecture_visual.html)** - Interactive system architecture diagram
- **[Module Flow Visual](docs/Visual%20Diagrams/module_flow_visual.html)** - Core module interactions and data flow
- **[Database Schema Visual](docs/Visual%20Diagrams/database_schema_visual.html)** - Complete ER diagram with relationships

### 📋 **Project Planning**
- **[Repository Setup Strategy](docs/Repo_Setup_Strategy.md)** - Git Flow, branching strategy, and version control
- **[Folder Structure Visual](docs/Visual%20Diagrams/folder_structure_visual.html)** - Detailed monorepo structure visualization
- **[User Roles Visual](docs/Visual%20Diagrams/user_roles_visual.html)** - Role-based access control interactions

### 🔧 **Technical Specifications**
- **[API Specification](docs/API_Specification.md)** - Complete RESTful API endpoints documentation
- **[User Roles & Permissions](docs/User_Roles.md)** - RBAC system and access matrix

## 👥 User Roles

| Role | Description | Key Features |
|------|-------------|--------------|
| **Admin** | Platform owner | User management, system settings, analytics |
| **Recruiter** | Company-side user | Job posting, candidate viewing, test review |
| **Candidate** | Job-seeker | Resume upload, test completion, job application |

## 🎯 Core Modules

### 🔐 **Authentication & User Management**
- JWT-based authentication
- Role-based access control
- User registration and profile management

### 💼 **Job Management**
- Job posting and editing
- Application tracking
- Candidate shortlisting

### 📎 **Resume Processing**
- AI-powered resume parsing
- Skill extraction and matching
- PDF/DOCX support

### 🧪 **Assessment Engine**
- Automated test generation
- Coding challenges
- MCQ and aptitude tests
- Real-time scoring

### 🤖 **AI Interview Bot**
- Mock interview simulation
- Behavioral assessment
- Automated feedback

### 📊 **Analytics Dashboard**
- Real-time metrics
- Performance analytics
- Hiring insights

## 🔗 Quick Links

### 📖 **Documentation**
- [📋 API Specification](docs/API_Specification.md)
- [👥 User Roles](docs/User_Roles.md)
- [🏗️ Repo Setup Strategy](docs/Repo_Setup_Strategy.md)

### 🎨 **Visual Diagrams**
- [🏗️ System Architecture](docs/Visual%20Diagrams/architecture_visual.html)
- [📁 Folder Structure](docs/Visual%20Diagrams/folder_structure_visual.html)
- [👥 User Roles](docs/Visual%20Diagrams/user_roles_visual.html)
- [🔄 Module Flow](docs/Visual%20Diagrams/module_flow_visual.html)
- [🗄️ Database Schema](docs/Visual%20Diagrams/database_schema_visual.html)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Java 11+
- Python 3.8+
- MySQL 8.0+
- Docker

### Installation
```bash
# Clone the repository
git clone https://github.com/yashdesai023/HireSense-AI.git
cd HireSense-AI

# Frontend setup
cd frontend
npm install
npm start

# Backend setup
cd ../backend
./mvnw spring-boot:run

# ML Service setup
cd ../ml-service
pip install -r requirements.txt
python main.py
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📌 Author

**[Yash Desai](https://github.com/Yash-Desai)** - *HireSense AI Developer*

---

<div align="center">

**HireSense AI** - *Empowering Smarter Hiring with AI* 🚀

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/yashdesai023/HireSense-AI)

</div>

