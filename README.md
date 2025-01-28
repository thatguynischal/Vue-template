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
- [📝 Coding Guidelines](#-coding-guidelines)

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

## 📝 Coding Guidelines

### Naming Conventions

#### File and Folder Structure
- **Components**: Use PascalCase for both file and component names
  ```
  Good: UserProfile.vue, NavigationBar.vue
  Bad: user-profile.vue, navigationBar.vue
  ```
- **Composables**: Use camelCase with 'use' prefix
  ```
  Good: useAuthentication.ts, useApiService.ts
  Bad: authentication.ts, UseApiService.ts
  ```
- **Tests**: Use the same name as the file being tested with .spec.ts or .test.ts suffix
  ```
  Good: UserProfile.spec.ts, NavigationBar.test.ts
  Bad: UserProfileTest.ts, navigation-bar.test.ts
  ```

#### Component Naming
- **Base/Generic Components**: Prefix with 'Base'
  ```vue
  Good:
  <BaseButton variant="primary" />
  <BaseInput type="text" />

  Bad:
  <Button variant="primary" />
  <CustomInput type="text" />
  ```
- **Single Instance Components**: Prefix with 'The'
  ```vue
  Good:
  <TheHeader />
  <TheFooter />

  Bad:
  <Header />
  <MainFooter />
  ```

#### Props
- Use camelCase for prop names
- Boolean props should start with 'is', 'has', or 'should'
  ```vue
  Good:
  <UserProfile
    userName="John"
    isActive
    hasPermission
    shouldAnimate
  />

  Bad:
  <UserProfile
    user-name="John"
    active
    permission
    animate
  />
  ```

#### Events
- Use kebab-case for event names
- Prefix with descriptive verbs
  ```vue
  Good:
  <BaseButton @click="handleClick" />
  this.$emit('user-logged-in')
  this.$emit('form-submitted')

  Bad:
  <BaseButton @onClick="handleClick" />
  this.$emit('login')
  this.$emit('submitForm')
  ```

#### CSS Classes
- Use kebab-case for class names
- Follow BEM methodology for component styling
  ```vue
  Good:
  <style scoped>
  .user-profile { /* Block */ }
  .user-profile__avatar { /* Element */ }
  .user-profile--active { /* Modifier */ }
  </style>

  Bad:
  <style scoped>
  .userProfile { }
  .userProfile_avatar { }
  .active-user-profile { }
  </style>
  ```

### TypeScript Guidelines

#### Interfaces & Types
- Use PascalCase
- Prefix interfaces with 'I' (optional but consistent)
  ```typescript
  // Good
  interface IUserProfile {
    id: string;
    firstName: string;
    lastName: string;
  }

  type ButtonVariant = 'primary' | 'secondary' | 'danger';

  // Bad
  interface userProfile { }
  type buttonVariant = 'primary' | 'secondary' | 'danger';
  ```

#### Constants
- Use UPPERCASE with underscores for global constants
- Use PascalCase for enums
  ```typescript
  // Good
  const API_BASE_URL = 'https://api.example.com';
  enum HttpStatus {
    Ok = 200,
    NotFound = 404,
    ServerError = 500
  }

  // Bad
  const apiBaseUrl = 'https://api.example.com';
  enum httpStatus { }
  ```

### Vue Component Structure
Follow this order in components for consistency:
```vue
<script setup lang="ts">
// 1. Type imports
import type { PropType } from 'vue'

// 2. Component imports
import BaseButton from '@/components/BaseButton.vue'

// 3. Composable imports
import { useUser } from '@/composables/useUser'

// 4. Props/Emits definitions
interface Props {
  title: string
  isActive?: boolean
}

// 5. Props with defaults
const props = withDefaults(defineProps<Props>(), {
  isActive: false
})

// 6. Emits
const emit = defineEmits<{
  submit: [data: FormData]
  cancel: []
}>()

// 7. Local state/refs
const isLoading = ref(false)

// 8. Computed properties
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// 9. Methods
const handleSubmit = () => {
  emit('submit', formData)
}
</script>

<template>
  <div class="component-name">
    <!-- Template content -->
  </div>
</template>

<style scoped>
/* Component styles */
</style>
```

### Best Practices

#### Component Design
- Keep components small and focused on a single responsibility
- Use props for component configuration
- Emit events instead of modifying parent state directly
- Use slots for flexible content distribution

#### Performance
- Use `v-show` for frequently toggled elements
- Use `v-for` with `key` for list rendering
- Avoid expensive operations in computed properties
- Use `shallowRef` for large objects that don't need deep reactivity

#### State Management
- Use `ref` for primitive values
- Use `reactive` for objects
- Use Pinia for global state management
- Keep component state local when possible

#### Testing
- Test component behavior, not implementation
- Write tests for critical business logic
- Use meaningful test descriptions
- Follow the Arrange-Act-Assert pattern

```typescript
// Good
describe('UserProfile', () => {
  it('should display user name when provided', () => {
    // Arrange
    const wrapper = mount(UserProfile, {
      props: { userName: 'John Doe' }
    })
    
    // Act
    const nameElement = wrapper.find('.user-name')
    
    // Assert
    expect(nameElement.text()).toBe('John Doe')
  })
})

// Bad
describe('UserProfile', () => {
  it('test', () => {
    const wrapper = mount(UserProfile)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
```

These guidelines aim to maintain consistency and improve code quality across the project. Follow them to ensure a maintainable and scalable codebase.
