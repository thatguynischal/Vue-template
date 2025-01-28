# Vue 3 Template with TypeScript

## Table of Contents

- [📋 Prerequisites](#-prerequisites)
- [🛠️ Installation](#-installation)
    - [Local Development](#local-development)
- [📦 Packaging and Deployment](#-packaging-and-deployment)
    - [Docker](#docker)
    - [Nginx Configuration](#nginx-configuration)
- [📚 Documentation](#-documentation)
    - [Getting Started](#getting-started)
    - [Component Structure](#component-structure)
    - [Routing and Navigation](#routing-and-navigation)
    - [State Management](#state-management)
    - [API Integration](#api-integration)
    - [Testing and Debugging](#testing-and-debugging)
- [🔧 Available Scripts](#-available-scripts)
    - [npm run dev](#npm-run-dev)
    - [npm run build](#npm-run-build)
    - [npm run preview](#npm-run-preview)
- [🚢 Deployment](#-deployment)
    - [Using Docker (Recommended)](#using-docker-recommended)
    - [Manual Deployment](#manual-deployment)

A modern Vue 3 template built with TypeScript, Vite, and best practices for enterprise-level applications. This template provides a solid foundation for building scalable and maintainable Vue applications.

## 🚀 Features

- Vue 3 with Composition API and `<script setup>`
- TypeScript for enhanced type safety and developer experience
- Vite for lightning-fast development and building
- Pinia for state management
- Vue Router for routing
- Axios for API requests
- Docker support for containerization
- Nginx configuration for production deployment
- Modern and responsive UI components

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional, for containerization)

## 🛠️ Installation

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd vue-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Docker Development

1. Build and run using Docker Compose:

```bash
docker compose up -d
```

The application will be available at `http://localhost:8080`.

Additional Docker commands:

- `docker compose logs -f` - Follow the logs
- `docker compose restart` - Restart the services
- `docker compose ps` - Check container status
- `docker compose down` - Stop and remove containers

## 🏗️ Project Structure

```
vue-template/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable Vue components
│   ├── modules/         # Feature modules
│   │   └── dashboard/   # Dashboard module
│   ├── services/        # API services
│   ├── constants/       # Constants and configurations
│   └── utils/          # Utility functions
├── public/             # Public static files
├── docker/             # Docker configuration files
└── vite.config.ts      # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚢 Deployment

### Using Docker (Recommended)

1. Build the Docker image:

```bash
docker build -t vue-template .
```

2. Run the container:

```bash
docker run -p 8080:80 vue-template
```

### Manual Deployment

1. Build the application:

```bash
npm run build
```

2. Deploy the contents of the `dist` directory to your web server

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
