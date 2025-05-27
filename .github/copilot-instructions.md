<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# React TypeScript Dashboard Project

This is a React TypeScript project built with Vite and styled exclusively with Tailwind CSS. The project features a comprehensive dashboard system with school and student views.

## Key Technologies
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling (no other CSS frameworks)
- React Router DOM for navigation
- Lucide React for icons

## Project Structure
- `/src/components/` - Reusable UI components
- `/src/pages/` - Page components for routing
- `/src/App.tsx` - Main app component with routing configuration

## Styling Guidelines
- Use only Tailwind CSS classes for styling
- No custom CSS files except for Tailwind directives in index.css
- Follow Tailwind's utility-first approach
- Use Tailwind's gradient, shadow, and spacing utilities for modern design
- Responsive design with mobile-first approach

## Component Patterns
- All components are functional components with TypeScript
- Use proper TypeScript interfaces for props
- Follow React best practices for state management
- Use React Router hooks for navigation

## Dashboard Features
- School Dashboard: Course management, statistics, challenge calendar
- Student Dashboard: Personal progress, enrolled courses
- Challenge system with date selection
- Responsive sidebar navigation
- Interactive calendar widget

When suggesting code changes:
- Always use Tailwind CSS classes
- Maintain TypeScript type safety
- Follow the existing component structure
- Use Lucide React icons when needed
- Ensure responsive design principles
