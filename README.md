# React TypeScript Dashboard Project

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS. This project features comprehensive school and student dashboards with course management, challenge tracking, and interactive calendar functionality.

## 🚀 Technologies Used

- **React 18** with TypeScript for type-safe component development
- **Vite** for fast build tooling and development experience
- **Tailwind CSS** for utility-first styling and responsive design
- **React Router DOM** for client-side routing and navigation
- **Lucide React** for beautiful, consistent icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx     # Navigation sidebar component
│   └── CourseCard.tsx  # Course display card component
├── pages/              # Page components for routing
│   ├── SchoolDashboard.tsx    # Main school dashboard
│   ├── SchoolTailwind.tsx     # School Tailwind page
│   ├── StudentDashboard.tsx   # Student dashboard
│   ├── Challenges.tsx         # Challenges overview
│   ├── ChallengeDetails.tsx   # School challenge view
│   └── MainChallengeDetails.tsx # Detailed challenge view
├── App.tsx             # Main app with routing configuration
└── main.tsx           # Application entry point
```

## 🎨 Key Features

### School Dashboard
- **Course Management**: Display and manage available courses with enrollment statistics
- **Statistics Overview**: Track total courses, students, and challenges
- **Interactive Calendar**: Date selection for challenge participation
- **Modern UI**: Gradient backgrounds, hover effects, and responsive design

### Student Dashboard
- **Personal Progress**: Track individual course progress and completion
- **Enrolled Courses**: View and access current courses
- **Challenge Participation**: Engage with available challenges

### Navigation
- **Responsive Sidebar**: Fixed navigation with gradient background
- **Active States**: Visual feedback for current page
- **Smooth Transitions**: Hover effects and animations

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Routing Structure

- `/` - Redirects to `/school`
- `/school` - School Dashboard (main view)
- `/school-tailwind` - School Tailwind page
- `/student` - Student Dashboard
- `/courses` - Course management (aliases to School Dashboard)
- `/challenges` - Challenges overview
- `/school/challenges/:id` - School view of specific challenge
- `/challenges/:id` - Detailed challenge view for students
- `/profile` - User profile (aliases to School Dashboard)

## 🎨 Styling Guidelines

This project uses **Tailwind CSS exclusively** for styling:

- **Utility-First**: Use Tailwind utility classes for all styling
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Consistent Spacing**: Use Tailwind's spacing scale (p-4, m-6, gap-3, etc.)
- **Modern Gradients**: Gradient backgrounds for visual appeal
- **Hover Effects**: Interactive elements with smooth transitions

### Example Usage
```tsx
<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">
    Dashboard Content
  </h2>
</div>
```

## 🧩 Component Patterns

### TypeScript Interfaces
```tsx
interface Course {
  id: string;
  title: string;
  host: string;
  studentsEnrolled: number;
  studentsCompleted: number;
}

interface CourseCardProps {
  course: Course;
}
```

### Functional Components
```tsx
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Component logic
  return (
    <div className="bg-white rounded-xl p-5 shadow-md">
      {/* Component JSX */}
    </div>
  );
};
```

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first** design approach
- **Responsive grid layouts** using CSS Grid and Flexbox
- **Adaptive navigation** for different screen sizes
- **Touch-friendly** interactive elements

## 🚀 Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📄 License

This project is part of the Intelligence Plus dashboard system.

---

## 🤝 Contributing

When contributing to this project:

1. Follow the established TypeScript patterns
2. Use only Tailwind CSS for styling
3. Maintain responsive design principles
4. Add proper TypeScript interfaces for new components
5. Test across different screen sizes
    ...reactDom.configs.recommended.rules,
  },
})
```
