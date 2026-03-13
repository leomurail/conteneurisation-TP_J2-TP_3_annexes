# Déploiement Frontend + Backend avec Kubernetes (TP 3)

## Architecture du projet

```bash
.
├── Makefile : makefile pour automatiser les tâches
├── README.md : ce fichier
├── TP_3_kubernetes_annexes.pdf : instructions du TP
├── backend
│   ├── Dockerfile : instructions pour construire l'image docker
│   ├── package.json : dépendances du backend
│   └── server.js : code source du backend
├── frontend
│   ├── Dockerfile : instructions pour construire l'image docker
│   ├── package.json : dépendances du frontend
│   └── server.js : code source du frontend
└── k8s
    ├── backend-deployment.yaml : deployment pour le backend
    ├── backend-service.yaml : service pour le backend
    ├── frontend-deployment.yaml : deployment pour le frontend
    └── frontend-service.yaml : service pour le frontend
```

## Getting started

### 1. Construire les images Docker
```bash
make build
```

### 2. Charger les images dans Minikube
```bash
make load-minikube
```

### 3. Déployer l'application
```bash
make deploy
```

### 4. Vérifier le déploiement
```bash
make status
```

### 5. Accéder à l'application
```bash
make port-forward
```
Allez sur `http://localhost:8080` dans votre navigateur.

### 6. Nettoyer
```bash
make clean
```
# conteneurisation-TP_J2-TP_3_annexes
