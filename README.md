# Déploiement Frontend + Backend avec Kubernetes (TP 3)

Ce projet déploie une application simple multi-services sur Kubernetes.
Il contient un **backend** (API Node.js) et un **frontend** (Serveur Web Node.js) qui communiquent entre eux.

## Structure du projet

- `backend/` : Code source et Dockerfile de l'API REST.
- `frontend/` : Code source et Dockerfile de l'interface utilisateur.
- `k8s/` : Manifestes Kubernetes (Deployments et Services).
- `Makefile` : Scripts d'automatisation.

## Architecture

1. **Pod Backend** : Exécute l'application Node.js (API).
2. **Service Backend** : Expose le backend en interne (`ClusterIP`) sur le port 3000. Il est appelé `backend-service`.
3. **Pod Frontend** : Exécute un serveur Node.js qui appelle le backend via `http://backend-service:3000` au moment de générer la page web.
4. **Service Frontend** : Expose le frontend à l'extérieur via `NodePort` sur le port 30080 (ou via port-forward).

Le Frontend et le Backend sont découplés : les fichiers applicatifs (code, Dockerfile) sont séparés des manifestes d'infrastructure (fichiers YAML k8s).

## Concepts Clés

- **Différence Docker Compose / Kubernetes** : Docker Compose gère les conteneurs sur une seule machine. Kubernetes est un orchestrateur conçu pour gérer des conteneurs à grande échelle sur un cluster (plusieurs nœuds), avec des fonctionnalités de haute disponibilité et d'auto-réparation.
- **Rôle d'un Pod** : C'est la plus petite unité déployable dans Kubernetes. Il contient un ou plusieurs conteneurs qui partagent le même réseau et stockage.
- **Rôle d'un Deployment** : Il gère le cycle de vie des Pods, en assurant que le bon nombre de réplicas est toujours en cours d'exécution.
- **Rôle d'un Service** : Il fournit une adresse IP et un nom DNS stables pour accéder à un ensemble de Pods, permettant la communication inter-services.
- **Communication inter-services** : Le Frontend accède au Backend en utilisant le nom du Service (`backend-service`), que le DNS interne de Kubernetes résout automatiquement.

## Commandes pour tester

### 1. Construire les images Docker
```bash
make build
```
*(Si vous utilisez Minikube, pensez à configurer l'environnement Docker au préalable avec `eval $(minikube docker-env)`, ou chargez les images si vous utilisez kind/k3d).*

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
L'application est accessible via un `port-forward` (la manière la plus simple en local) :
```bash
make port-forward
```
Allez sur `http://localhost:8080` dans votre navigateur.

Vous pouvez aussi utiliser le NodePort défini (30080) avec l'IP de votre noeud Kubernetes.

### 5. Nettoyer
```bash
make clean
```
# conteneurisation-TP_J2-TP_3_annexes
