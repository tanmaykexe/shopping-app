# 🛒 Shopping App

A full-stack **3-tier Shopping Application** built with **Node.js, MySQL, Docker, and Kubernetes**.

The project demonstrates how to containerize an application, deploy it on Kubernetes, manage configuration securely, persist data, expose services through an NGINX Ingress, and follow production-oriented Kubernetes practices.

---

## 🚀 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose
- Kubernetes
- Kind
- NGINX Ingress Controller

---

## ✨ Features

- 🛒 Display products from MySQL
- REST API using Express.js
- Dockerized frontend and backend
- Kubernetes Deployments
- Kubernetes Services
- ConfigMaps for application configuration
- Secrets for database credentials
- Persistent Volumes (PV)
- Persistent Volume Claims (PVC)
- Readiness Probe
- Liveness Probe
- Resource Requests & Limits
- NGINX Ingress Controller
- Custom domain (`shopping.local`)
- Automatic pod recovery
- Persistent MySQL storage

---

# 📐 Architecture

```
                    Browser
                        │
                shopping.local
                        │
              NGINX Ingress Controller
                        │
        ┌───────────────┴───────────────┐
        │                               │
   Frontend Service                Backend Service
        │                               │
   Frontend Pod                   Backend Pod
                                        │
                             ConfigMap + Secret
                                        │
                                  MySQL Service
                                        │
                                   MySQL Pod
                                        │
                                   PVC → PV
```

---

# 📂 Project Structure

```text
shopping-app/
│
├── backend/
├── frontend/
├── mysql/
│
├── k8s/
│   ├── backend-configmap.yaml
│   ├── backend-secret.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── mysql-deployment.yaml
│   ├── mysql-service.yaml
│   ├── mysql-pv.yaml
│   ├── mysql-pvc.yaml
│   └── ingress.yaml
│
├── kind-config.yaml
│
├── docker-compose.yml
└── README.md
```

---

# 📸 Screenshots

---

## 🛒 Shopping Application

The application running through **NGINX Ingress** using the custom domain `shopping.local`.

![Shopping Application](screenshots/shopping-app.png)

---

## ☸️ Kubernetes Pods

All application Pods running successfully inside the Kubernetes cluster.

![Kubernetes Pods](screenshots/kubectl-pods.png)

---

## 🌐 Kubernetes Services

Internal Services exposing the frontend, backend, and MySQL components.

![Kubernetes Services](screenshots/kubectl-services.png)

---

## 🚪 NGINX Ingress

Ingress resource routing traffic from `shopping.local` to the appropriate Kubernetes Services.

![Kubernetes Ingress](screenshots/kubectl-ingress.png)

---

## ⚙️ Backend Deployment

Backend Deployment configured with:

- ConfigMaps
- Secrets
- Liveness Probe
- Readiness Probe
- Resource Requests
- Resource Limits

![Backend Deployment](screenshots/kubectl-describe-backend.png)

---

## 🐳 Docker Containers

Application running with Docker Compose during the Docker deployment phase.

![Docker Containers](screenshots/docker-containers.png)

---

## 📦 Docker API Response

Backend API successfully returning product data.

![API Response](screenshots/api-response.png)

---

## 📁 Project Structure

Project directory structure.

![Project Structure](screenshots/project-structure.png)

---

## 🏠 Docker Version Home Page

Application running using Docker Compose before migrating to Kubernetes.

![Docker Home](screenshots/Home.png)

## Architecture

*(Optional architecture diagram)*

---

# 🛠 Kubernetes Features Implemented

✅ Deployments

✅ ReplicaSets

✅ Pods

✅ Services

✅ ConfigMaps

✅ Secrets

✅ Persistent Volumes

✅ Persistent Volume Claims

✅ Liveness Probes

✅ Readiness Probes

✅ Resource Requests

✅ Resource Limits

✅ NGINX Ingress

✅ Custom Domain

---

# 🌐 Access

Frontend

```
http://shopping.local
```

Health Endpoint

```
http://shopping.local/health
```

Products API

```
http://shopping.local/products
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Docker containerization
- Kubernetes application deployment
- Service discovery
- Persistent storage
- Configuration management
- Secret management
- Health monitoring
- Resource management
- Ingress routing
- Kubernetes troubleshooting
- Production-oriented deployment practices

---

## 👨‍💻 Author

**Tanmay Khatri**

Built with ❤️ using Docker & Kubernetes 🚀
