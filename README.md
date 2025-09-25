# Demo_one

A React Registration Module with Login and Dashboard functionality, built with TypeScript and Webpack.

## Features

- User Registration
- User Login
- Dashboard after successful authentication
- TypeScript support
- Responsive design
- Automated CI/CD pipeline

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Code Quality

This project includes automated code quality checks:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Check TypeScript types
npm run type-check

# Format code
npm run format

# Check code formatting
npm run format:check
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

1. **Linting & Type Checking**: Runs ESLint, TypeScript compiler, and Prettier checks
2. **Building**: Creates production build using Webpack
3. **Deployment**: Automatically deploys to GitHub Pages on main branch

### GitHub Actions Workflow

- Triggers on push/PR to main branch
- Runs code quality checks (lint, type-check, format)
- Builds the application for production
- Deploys to GitHub Pages (on main branch only)

## Project Structure

```
src/
├── pages/
│   ├── Login.tsx
│   ├── Register.tsx
│   └── Dashboard.tsx
├── App.tsx
├── index.tsx
└── styles...
```

## Technologies Used

- React 19
- TypeScript
- React Router
- Webpack
- ESLint
- Prettier