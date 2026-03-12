.PHONY: build deploy clean port-forward apply

build:
	docker build -t backend:latest ./backend
	docker build -t frontend:latest ./frontend

load-kind:
	kind load docker-image backend:latest
	kind load docker-image frontend:latest

load-k3d:
	k3d image import backend:latest frontend:latest -c mycluster

deploy:
	kubectl apply -f k8s/backend-deployment.yaml
	kubectl apply -f k8s/backend-service.yaml
	kubectl apply -f k8s/frontend-deployment.yaml
	kubectl apply -f k8s/frontend-service.yaml

apply: deploy

port-forward:
	kubectl port-forward svc/frontend-service 8080:8080

clean:
	kubectl delete -f k8s/ || true
