#!/bin/bash

kubectl apply -f namespace.yaml
kubectl apply -f mongodb.yaml
kubectl apply -f backend.yaml
kubectl apply -f frontend-configmap.yaml
kubectl apply -f frontend.yaml
# kubectl apply -f ingress.yaml

# kubectl delete -f mongodb.yaml
# kubectl delete -f backend.yaml
# kubectl delete -f frontend-configmap.yaml
# kubectl delete -f frontend.yaml
# kubectl delete -f namespace.yaml
# kubectl delete -f ingress.yaml
