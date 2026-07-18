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

## Shopping Application

*(Add screenshot here)*

```
screenshots/app.png
```

---

## Kubernetes Pods

*(Add screenshot here)*

```
screenshots/pods.png
```

---

## Ingress

*(Add screenshot here)*

```
screenshots/ingress.png
```

---

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
