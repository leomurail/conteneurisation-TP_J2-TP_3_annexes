# Déploiement Frontend + Backend avec Kubernetes (TP 3)

Ce projet déploie une application simple multi-services sur Kubernetes.
Il contient un **backend** (API Node.js) et un **frontend** (Serveur Web Node.js) qui communiquent entre eux.

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
