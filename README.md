# Industries Dashboard

This project is a web-based dashboard built with React, TypeScript, and TailwindCSS. It includes backend communication via Axios and utilizes Jest for testing. The application is containerized using Docker to ensure smooth development, testing, and production environments.

---

## Prerequisites

To run this project, you need the following installed on your machine:

- [Docker](https://www.docker.com/) (version 20.10.0 or higher)
- [Docker Compose](https://docs.docker.com/compose/) (version 1.29.0 or higher)

---

## Features

- Frontend powered by **React** and **TypeScript**.
- **Axios** for API communication.
- **TailwindCSS** for styling.
- Using **Jest** for unit testing.
- Containerized for easy deployment with **Nginx** as production server.

---

## Project Setup with Docker

This project is designed to run seamlessly in a Dockerized environment. Follow the steps below to set up and run the project.

### 1. Clone the Repository

Clone the GitHub repository to your local machine:

```bash
git clone <repo-url>
```

Navigate to the project directory:

```bash
cd industries-dashboard
```

### 2. Build & Run the Docker Container

Build and start the containerized application using `docker-compose`:

```bash
docker-compose up --build
```

This command:

- **Builds** the project inside a Node.js-based container.
- **Serves** the production-ready files using Nginx.
- **Maps ports** so the app is available at `http://localhost:3000`.

### 3. Stopping the Application

To stop the running application, use:

```bash
docker-compose down
```

---

## Running Tests

To run tests, use the following command:

```bash
npm run test
```

This command triggers **Jest** to execute all configured tests in the project.

---

## Folder Structure

Here's a brief overview of the folder structure:

- **/src**: The source code of the application.
- **/config**: Configuration files, such as API-related configurations.
- **/dist**: The production build, created during the Docker build process.
- **Dockerfile**: The Docker instructions to build and deploy the app.
- **docker-compose.yml**: Configuration for running the app using Docker Compose.

---

## Configuration

API-related settings are configured in `/src/config/app.config.ts`. You can customize:

- `BASE_URL`
- `API VERSION`

Make sure to change these values in your `.config.ts` file to match your backend services.

---

## Application Access

Once the Docker container is up, visit the following URL in your browser:

```plaintext
http://localhost:3000
```

---

## Dependencies

| Dependency  | Version   | Description                            |
|-------------|-----------|----------------------------------------|
| axios       | ^1.7.9    | HTTP client for making API requests.   |
| react       | ^18.3.1   | Library for building user interfaces. |
| react-dom   | ^18.3.1   | React rendering for web applications. |

---

## Dev Dependencies

| Dev Dependency          | Version   | Description                                  |
|--------------------------|-----------|----------------------------------------------|
| @babel/preset-env        | ^7.26.0   | Transpiler for modern JavaScript features.   |
| @babel/preset-typescript | ^7.26.0   | Transpiler for TypeScript.                  |
| @eslint/js               | ^9.17.0   | Configuration for ESLint.                   |
| @types/jest              | ^29.5.14  | TypeScript definitions for Jest testing.    |
| @types/react             | ^18.3.18  | TypeScript definitions for React.           |
| @types/react-dom         | ^18.3.5   | TypeScript definitions for React DOM.       |
| @vitejs/plugin-react     | ^4.3.4    | Integrates React with Vite.                 |
| autoprefixer             | ^10.4.20  | Adds vendor prefixes to CSS.                |
| babel-jest               | ^29.7.0   | Jest integration with Babel transpiler.     |
| eslint                   | ^9.17.0   | Linting tool for code quality.              |
| eslint-plugin-react-hooks| ^5.0.0    | Ensures React Hooks rules are followed.     |
| eslint-plugin-react-refresh | ^0.4.16| Plugin for React Fast Refresh.              |
| globals                  | ^15.14.0  | Provides commonly used global variables.    |
| postcss                  | ^8.5.1    | Tool for transforming CSS with plugins.     |
| tailwindcss              | ^3.4.17   | Utility-first CSS framework.                |
| typescript               | ~5.6.2    | TypeScript compiler for static type checks. |
| typescript-eslint        | ^8.18.2   | ESLint integration with TypeScript.         |
| vite                     | ^6.0.5    | Build tool and development server.          |
