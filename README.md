# LongExhales
## Live Demo
https://longexhales-project.vercel.app

##Project Overview
LongExhales is a transformative wellness brand offering culturally-grounded, trauma-informed healing experiences. This website serves as the digital home for Nathan Fallou's unique wellness practices, including Dance Prayers, African Trance Music Breathwork, Temporary Utopia Improv Games, and Ice Bath Karaoke. The site bridges ancient healing traditions with modern therapeutic approaches while maintaining a socially conscious wellness philosophy.

## Brand Identity
### Color System

· Primary: Teal (#0d9488) - Represents trust, technology, and peace. Used for main brand elements and primary actions.
· Secondary: Purple (#a855f7) - Symbolizes advocacy and creativity. Used for secondary branding elements.
· Accent: Amber (#f59e0b) - Evokes energy and positivity. Used for CTAs and highlights.
· Neutral Dark: Charcoal (#171717) - Provides strong contrast for text and important elements.
· Neutral Light: Cream (#fafafa) - Creates clean, professional backgrounds.

### Typography

· Headings: Poppins - Chosen for its modern, clean appearance that conveys professionalism and approachability.
· Body: Inter - Selected for its excellent readability and modern aesthetic, perfect for content-heavy sections.

## Design Decisions
### Layout Adherence

· Spacing Implementation: Used Tailwind's default spacing scale (4, 6, 8, 12, 16, 20, 24, 32, etc.) to maintain consistent proportions
· Measurement Tools: Browser dev tools for precise spacing measurements between components
· Grid Systems: Maintained identical grid structures with consistent gutters across all components
· Component Positioning: Preserved exact margins and padding relationships throughout the layout

### Creative Departures
· Content Strategy: Transformed wellness service offerings into structured, compelling content while maintaining clear information hierarchy
· Brand Positioning: Emphasized cultural authenticity and trauma-informed approaches to wellness
· MD Breakpoint Design: Created tablet-optimized layouts that maintain visual hierarchy through:
  · Collapsing 4-column grids to 2-column layouts
  · Adjusting font sizes proportionally
  · Maintaining touch-friendly button sizes
  · Preserving image aspect ratios

## Component Architecture
The application follows a modular component structure:

src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Products.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Stats.jsx
│   │   └── CTA.jsx
│   └── common/
│       ├── Button.jsx
│       └── Card.jsx

### Reusability Strategy:
· Section components accept props for dynamic content
· Common components use variant patterns for different use cases
· Consistent spacing and styling through Tailwind utility classes
· PropTypes implementation for type safety

## Performance Optimizations

1. Image Optimization: Implemented lazy loading for all images
2. Code Splitting: Configured for route-based splitting
3. CSS Purge: Tailwind configured to remove unused styles in production
4. React.memo: Applied to prevent unnecessary re-renders
5. Bundle Analysis: Used for identifying optimization opportunities

## Image Credits

All images sourced from:
· Original brand photography

## Installation & Setup

bash
# Clone the repository
git clone https://github.com/Jackie-yins/longexhales-project
cd longexhales

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview


Environment Requirements:

· Node.js 16.0 or higher
· npm 7.0 or higher
· Modern browser with ES6+ support

## Technologies Used

· React: 18.2.0 - Modern React with hooks for state management
· Tailwind CSS: 3.3.0 - Utility-first CSS framework
· Vite: 4.4.0 - Fast build tool and development server
· React Icons: 4.12.0 - Comprehensive icon library
· PropTypes: For component prop validation

## Challenges & Solutions

1. Custom Breakpoint Configuration

Challenge: Implementing custom breakpoints (SM: 0-640px, MD: 641-1023px, LG: 1024px+) that differed from Tailwind's defaults.

Solution:

· Customized Tailwind configuration with specific screen definitions
· Implemented mobile-first responsive design approach
· Thorough testing across all device sizes

2. Component Responsiveness

Challenge: Ensuring all components maintained proper layout and functionality across all breakpoints.

Solution:

· Applied consistent responsive classes (sm:, md:, lg:)
· Used flex and grid systems that adapt to screen sizes
· Implemented mobile navigation with hamburger menu

3. Brand Consistency

Challenge: Maintaining consistent branding while adapting to responsive requirements.

Solution:

· Established design token system with Tailwind colors
· Created reusable component patterns
· Ensured typography scaled appropriately across breakpoints

## Future Improvements

1. Booking System Integration
   · Implement calendar booking functionality
   · Add payment processing for session deposits
   · Create user accounts for returning clients
2. Enhanced Multimedia Experience
   · Add video backgrounds of wellness sessions
   · Implement audio samples of trance music
   · Create interactive breathwork guides
3. Internationalization
   · Add multiple language support
   · Implement culturally-appropriate content variants
   · Create region-specific session offerings
4. Advanced Analytics
   · Implement custom event tracking for session interest
   · Add A/B testing for conversion optimization
   · Integrate with wellness industry analytics platforms
5. Progressive Web App Features
   · Add offline functionality for core content
   · Implement push notifications for new session types
   · Create installable PWA for mobile users
