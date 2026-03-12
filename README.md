# Déploiement Frontend + Backend avec Kubernetes (TP 3)

Ce projet déploie une application simple multi-services sur Kubernetes.
Il contient un **backend** (API Node.js) et un **frontend** (Serveur Web Node.js) qui communiquent entre eux.

## Getting started

### 1. Construire les images Docker
```bash
make build
```

### 2. Déployer l'application
```bash
make deploy
```

### 3. Vérifier le déploiement
```bash
kubectl get pods
kubectl get services
```

### 4. Accéder à l'application
```bash
make port-forward
```
Allez sur `http://localhost:8080` dans votre navigateur.

### 5. Nettoyer
```bash
make clean
```
# conteneurisation-TP_J2-TP_3_annexes
