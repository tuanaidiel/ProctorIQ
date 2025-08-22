# ProctorIQ – Online Exam Platform (Prototype)

ProctorIQ is a **full-stack online exam platform** built with **Angular 19** (frontend), **ASP.NET Core 9 Web API** (backend), and **Azure Cloud Services** (App Service, AD B2C, Blob Storage).  

This repository hosts the **prototype frontend** only.  
⚠️ Backend features are disabled in this version to avoid cloud charges.  
The deployed app is meant for **UI/UX demonstration purposes**.

---

## 🚀 Features (Prototype Mode)

- Secure authentication & role-based access (UI only – no live backend)  
- Dashboard for students & administrators  
- Exam management interface (create, view, manage exams – mock data only)  
- Image upload UI (disabled in demo)  
- Dynamic Angular components for responsive design  
- Email notification flow (UI only, not functional in prototype)  

---

## 🛠️ Tech Stack

**Frontend:** Angular 19  
**Backend (not deployed in prototype):** ASP.NET Core 9 Web API, Entity Framework Core, SQL Server  
**Cloud Services (planned for production):** Azure App Service, Azure AD B2C, Azure Blob Storage  
**CI/CD:** Azure DevOps  
**Architecture:** Clean Architecture, Modular Design  

---

## 📦 Running Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/proctoriq.git
cd proctoriq
npm install
npm start
