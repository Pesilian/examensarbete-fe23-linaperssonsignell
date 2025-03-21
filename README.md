# Setup to Run Project in Docker

## Prerequisites

- **Docker** installed (if not, follow [this guide](https://docs.docker.com/get-docker/)).
- **Docker Desktop** installed (if you want to use a GUI for managing Docker).

---

## Step 1: Clone the Project

First, clone the repository. Open your terminal and run:

```sh
git clone https://github.com/Pesilian/grait-transcribe-frontend.git
cd grait-transcribe-frontend
```

---

## Step 2: Build and Start the Docker Container

1. **Navigate to your frontend folder** (if not already there):

```sh
cd grait-transcribe-frontend
```

2. **Create .env.local in root of project** :

```sh
Use template and copy in to .env.local-file.
```

3. **Build and start the Docker container** by running the following command:

```sh
docker compose up --build
```

---

## Step 3: Access Your Application

```
http://localhost:3000
```

---

## Step 4: Stop the Container

When you're done and want to stop the container, run:

```sh
docker compose down
```

This command will shut down and remove the container.

---

## Step 5: Manage and Debug the Container (Optional)

To follow the logs of the container, you can run:

```sh
docker compose logs -f
```

---

## Common Issue and Solutions

### **Port already in use**

If you get an error saying port 3000 is already in use, you can change the mapped port in `docker-compose.yml`:

```yaml
ports:
  - '4000:3000' # Map port 4000 on your machine to 3000 in the container
```

---
