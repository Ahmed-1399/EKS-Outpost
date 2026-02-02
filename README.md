# 🚀 Deploy 3-tier Application using (Self-managed EKS)

This repository contains everything you need to deploy a scalable and resilient 3-tier application architecture using a self-managed **Elastic Kubernetes Service (EKS)** on AWS. The guide provides step-by-step instructions and necessary configurations to get you up and running in no time.

---

## 🧱 Architecture

Our 3-tier application architecture on AWS comprises:
- **Presentation Layer (Frontend)**: A user interface for interacting with the application.
- **Application Layer (Backend)**: Processes user requests and handles core business logic.
- **Data Layer**: Efficiently stores and serves structured data.

Below is a high-level architectural diagram illustrating the components of the system:

![Architecture](./assets/AWS-Outposts-EKS.webp)

---

## 📂 Project Structure

```plaintext
Project Details
├── 📁 assets/               # Architecture diagrams and images
├── 📁 Outpost/              # Outpost configuration and VPC integration
├── 📂 EKS-Cluster/          # Self-managed EKS cluster setup
├── 📂 Simple-3-tier-app/    # Kubernetes manifests for 3-tier app
└── 📄 README.md             # Project documentation
```

1. **`Outpost/`** 🌐
   - Setting up AWS Outposts integration with custom VPC and networking configurations for hybrid cloud solutions.

2. **`EKS-Cluster/`** 🛠️
   - Scripts and configurations required to deploy and manage a self-managed EKS cluster.

3. **`Simple-3-tier-app/`** 💾
   - Contains Kubernetes manifests (manifests for Deployment, Services, ConfigMaps, etc.) for deploying a real-world 3-tier application that includes frontend, backend, and database layers.
---

## 🛠️ Key Features
- **Scalable architecture**: Built on an Elastic Kubernetes Service (EKS) with support for dynamic scaling.
- **Self-managed operations**: Full control over the EKS clusters and associated infrastructure.
- **Cost-optimized infrastructure**: Leverages the hybrid cloud approach for flexibility and resource optimization.
- **Production-grade configurations**: Security and reliability have been prioritized to meet the best practices.
- **Reusable templates**: Organized project structure for rapid deployment and easier maintenance.

---

## 💻 Pre-requisites

Before you begin, ensure you have the following prerequisites installed:
1. **AWS CLI** - For managing AWS environments and configurations.
2. **kubectl** - For managing the Kubernetes cluster and deploying resources.
3. **Helm** - Package manager for Kubernetes to simplify the deployment of applications.

---

## 📋 Quick Start Guide

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Ahmed-1399/EKS-Outpost.git
cd <REPOSITORY-NAME>
```

### 2️⃣ Set up AWS Outposts integration
Navigate to the `Outpost/` directory and follow the steps provided in the documentation to set up the AWS Outposts and integrate with a VPC.

### 3️⃣ Deploy self-managed EKS Cluster
Move to the `EKS-Cluster/` directory and execute the instructions to set up your self-managed EKS infrastructure.

### 4️⃣ Deploy the 3-tier Application
Use the Kubernetes manifests provided in the `Simple-3-tier-app/` folder to deploy the three-tier architecture application.


## 📞 Support

For support, reach out to the repository maintainer at **[ahmedmohamedooo77@gmail.com](mailto:your-email@example.com)** or open an issue on GitHub.
