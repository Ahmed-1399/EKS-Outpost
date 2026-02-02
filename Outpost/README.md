# AWS 2 Outposts – Networking Configuration 📖

---

## 🏗️ [Architecture](https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#outposts-networking-components)

![Outpost Architecture](./assets/Outpost.png)

---

## 🌐 VPC (Region)

- 💡 **It is recommended to create a new VPC from scratch to prevent failures**
- Key points to ensure a smooth setup:
  - 🔴 Avoid using the main Route Table, as it results in errors.
  - Ensure the following components are created:
    - ✅ **VPC-CIDR**: `192.168.0.0/16`
    - ✅ **Internet Gateway (IGW)**
    - ✅ **Route Table**
      - Add Routes
      - Subnet Association
    - ✅ **NAT Gateway** (Regional Only)
    - ✅ Add appropriate tags for each resource.

  ### VPC Diagram:
  ![VPC Setup](./assets/VPC.png) 

  ### Subnet Breakdown and Configuration:

  - **Outpost Subnet Creation**:

    **OTL11 (Created on Outpost)**:
    - `3-Private Subnet ASG (us-west-2a)` → **Worker Nodes**  
      - `192.168.4.0/24`, `192.168.5.0/24`, `192.168.6.0/24`
    - **Public Subnet Bastion (us-west-2a)** → Test connection  
      - `192.168.11.0/24`
    - **Public Subnet ALB (us-west-2a)** — On **Region**  
      - `192.168.7.0/24`
    
    **OTL7 (Created on Outpost)**:
    - `3-Private Subnet ASG (us-west-2b)` → **Worker Nodes**  
      - `192.168.1.0/24`, `192.168.2.0/24`, `192.168.3.0/24`
    - **Public Subnet Bastion (us-west-2b)** → Test connection  
      - `192.168.10.0/24`
    - **Public Subnet ALB (us-west-2b)** — On **Region**  
      - `192.168.8.0/24`
    - **Public Subnet ALB (us-west-2c)** — On **Region**  
      - `192.168.9.0/24`

---

## 🖥️ AWS Outpost

1. **Local Gateway (LGW)**:
    - Automatically created with the subnets.
    - After creating subnets on the outpost:
      - **Local Gateway Route Tables** are created automatically.
      - You must **associate the VPC** and configure Routes.

2. Steps to perform:
    - 📂 Go to the **VPC section**, and configure routing.
    - Manage Subnet Association and Route Tables.

    ### Graphical Illustrations:
    ![Outposts Configuration](./assets/Outposts.png)

    - Local Gateway Visualization:  
      ![LGW Configuration](./assets/LGW.png)

### 🌿 LGW Configuration Table

| **Configuration**             | **OTL11**                                           | **OTL7**                                           |
|-------------------------------|-----------------------------------------------------|---------------------------------------------------|
| **Local Gateway Configuration** | ![LGW OTL11](./assets/LGW-OTL11.png)             | ![LGW OTL7](./assets/LGW-OTL7.png)               |  
| **Associate VPC** | ![VPC Association OTL11](./assets/LGW-rt--VPC-association-OTL11.png)       | ![VPC Association OTL7](./assets/LGW-rt--VPC-association-OTL7.png)               |  
| **Routing from the VPC Route table to Outpost through Local Gateway (LGW) — in the region** | ![Subnet Association OTL11](./assets/Subnet-association-OTL11.png)  ![Route OTL11](./assets/VPC-RT-LGW-OTL11.png)           | ![Subnet Association OTL7](./assets/Subnet-association-OTL7.png)  ![Route OTL7](./assets/VPC-RT-LGW-OTL7.png)             |  
| **After associating successfully, go to Outpost-LGW-rt, and you should see “propagated.”** | ![Successfully Association OTL11](./assets/LGW-route-OTL11.png)       | ![Successfully Association OTL7](./assets/LGW-route-OTL7.png)               |  

<br>

### 📌 To test the connection, we will create 2 EC2 instances and ping each other


## ✅ Testing Connections

1. **💡 EC2 in Public Subnets**:
    - Create **2 EC2 instances** across outposts.
    - Use `ping` to test the connection.

    - Errors you might encounter:
      - Create **2 Security Groups (SG)** in Outpost, allowing:
        - **SSH**
        - **ICMP**
      - Supported EBS: **gpt2**
      - Supported Instance Types: **C5d.xlarge**, **C5.xlarge**
    

<br>

### 📌 Test the connection from Public to Public EC2 instances.

| **Example - Public-EC2**            | **us-west-2a (OTL11)**                                   | **us-west-2b (OTL7)**                                  |
|-------------------------------------|---------------------------------------------------------|-------------------------------------------------------|
| **EC2 Public Instance Output:**     | ![EC2 OTL11](./assets/1-EC2-Public-us-west2a-OTL11.png) | ![EC2 OTL7](./assets/1-EC2-Public-us-west2b-OTL7.png) |
| **🔐 Security Group**               | ![SGs OTL11](./assets/SG-us-west-2a-OTL11.png)          | ![SGs OTL7](./assets/SG-us-west-2b-OTL7.png)          |
| **📡 Test Ping:**                   | ![Test OTL11](./assets/3-Output-EC2-Public-us-west2a-OTL11.png) | ![Test OTL7](./assets/3-Output-EC2-Public-us-west2b-OTL7.png) |

<br>
<!-- # 12 <br> -->

### 📌 Test the connection from Public to Private EC2 instances.

| **Example - Private-EC2**           | **us-west-2a (OTL11)**                                   | **us-west-2b (OTL7)**                                  |
|-------------------------------------|---------------------------------------------------------|-------------------------------------------------------|
| **EC2 Private Instance Output:**    | ![EC2 OTL11](./assets/1-EC2-Private-us-west2a-OTL11.png) | ![EC2 OTL7](./assets/1-EC2-Private-us-west2b-OTL7.png) |
| **🔐 Security Group**               | ![SGs OTL11](./assets/SG-private-us-west-2a-OTL11.png)   | ![SGs OTL7](./assets/SG-private-us-west-2b-OTL7.png)   |
| **📡 Test Ping:**                   | ![Test OTL11](./assets/3-Output-EC2-private-us-west2a-OTL11.png) | ![Test OTL7](./assets/3-Output-EC2-private-us-west2b-OTL7.png) |             |

<br>

## 🔚 Final Steps

Both **Outposts** can successfully communicate. This configuration ensures reliable connection and meets the requirements for deploying instances in AWS Outposts.

For further information, refer to the official AWS documentation: [**AWS Outposts Launch Instances Guide**](https://docs.aws.amazon.com/outposts/latest/userguide/launch-instance.html)