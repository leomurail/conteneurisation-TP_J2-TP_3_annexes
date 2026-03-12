.PHONY: build deploy clean port-forward apply

build:
	docker build -t backend:latest ./backend
	docker build -t frontend:latest ./frontend

load-minikube:
	minikube image load backend:latest frontend:latest

deploy:
	kubectl apply -f k8s/backend-deployment.yaml
	kubectl apply -f k8s/backend-service.yaml
	kubectl apply -f k8s/frontend-deployment.yaml
	kubectl apply -f k8s/frontend-service.yaml

apply: deploy

status:
	kubectl get pods
	kubectl get svc

port-forward:
	kubectl port-forward svc/frontend-service 8080:8080

clean:
	kubectl delete -f k8s/ || true
