# Yazn Portfolio Website

## General Information

This project is a personal portfolio website. The website shows the work and skills of Yazn, a front-end web developer from Syria. The website is hosted on GitHub Pages at https://yazn-108.github.io.

## Purpose

The purpose of this website is to:

- Present professional work and projects
- Show technical skills and technologies used
- Provide contact information for potential clients
- Demonstrate front-end development capabilities

## Main Features

### Multi-Language Support

The website supports two languages:

- English (default)
- Arabic with right-to-left (RTL) layout support

Users can switch languages with the language button. The website saves the language choice in session storage.

### Theme Switching

The website has two themes:

- Light theme (default)
- Dark theme

Users can switch themes with the theme button. The website saves the theme choice in local storage.

### Responsive Design

The website works on all screen sizes:

- Mobile devices
- Tablets
- Desktop computers

The layout adjusts automatically based on screen width.

### Scroll Animations

The website uses ScrollReveal library for animations. Elements appear smoothly when the user scrolls to them.

### Project Display

The website fetches projects from the GitHub API. It shows:

- Project name
- Project description
- Link to source code
- Link to live demo
- Project banner image (if available)

Projects load in batches. Users can click "more projects" to load all projects.

### Contact Form

The contact section has:

- WhatsApp buttons for Turkey and Saudi Arabia
- Email link
- Social media links (Twitter, LinkedIn, Telegram, GitHub)

### Navigation

Fixed navigation bar with links to all sections:

- About Me
- Benefits
- Technologies I Use
- Projects
- Contact

Smooth scrolling to sections. Mobile menu with hamburger icon.

## Technologies Used

### Core Technologies

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (ES6 modules)
- TypeScript (for type safety)

### Libraries and Frameworks

- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **ScrollReveal** - Scroll animation library
- **Framer Motion** - Animation library
- **React** - UI library (for some components)
- **Next.js** - React framework (knowledge)
- **TanStack Query** - Data fetching library
- **shadcn/ui** - Component library

### Development Tools

- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline
- **Figma** - Design tool
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Database

- **MongoDB** - NoSQL database (knowledge)

## Project Structure

```
yazn-108.github.io/
├── index.html              # Main HTML file
├── favicon.svg             # SVG favicon
├── favicon.png             # PNG favicon
├── Alkatra.ttf             # Custom font
├── imgs/                   # Image assets
│   ├── logo.svg
│   ├── open-graph-image.png
│   └── projectsBg.png
├── src/
│   ├── input.css           # Tailwind CSS input
│   └── output.css          # Compiled CSS
└── js/
    ├── script.js           # Main JavaScript file
    ├── translation.js      # Translation data (EN/AR)
    └── skillsSectionData/
        ├── Data.js         # Skills/technologies data
        └── *.svg           # Skill icons
```

## Sections Description

### About Me

Shows the developer introduction. Contains:

- Title: "Who am I?"
- Subtitle: "I am not just an implementer; I am your technical partner."
- Description paragraph about background and approach

### Benefits

Explains why a website is important. Three benefit cards:

1. **Build Trust** - Professional presence, clear information access
2. **Reach Customers** - Single place for services and contact
3. **Convert Visitors** - Guide visitors to take action

### Technologies I Use

Grid of technology icons with names and brand colors. 14 technologies displayed.

### Projects

Dynamic project gallery from GitHub API. Each project card shows:

- Background image or project name
- Description on hover
- "Source" button (links to GitHub repo)
- "Browse" button (links to live demo)

Loads 3-7 projects initially based on screen width. "More projects" button loads all.

### Contact

Contact options:

- WhatsApp (Turkey)
- WhatsApp (Saudi Arabia)
- Email
- Social media links
- Message form with subject and message fields

## Services Offered

The developer offers three main services:

1. **Personal Website** - Design and build personal websites to show skills and work
2. **E-Commerce Development** - Build fast, user-friendly online stores
3. **Website Optimization** - Fix UI issues, refactor front-end code, improve performance

## Installation and Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/yazn-108/yazn-108.github.io.git

# Navigate to project directory
cd yazn-108.github.io

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

The website deploys automatically to GitHub Pages when changes are pushed to the main branch. GitHub Actions handles the build and deployment process.

## Browser Support

The website supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The website follows accessibility best practices:

- Semantic HTML elements
- ARIA labels on interactive elements
- Color contrast compliance
- Keyboard navigation support
- Screen reader compatible
- Language declaration (lang attribute)

## Performance

Performance optimizations include:

- Font preloading
- Image optimization
- CSS and JavaScript minification (production)
- Lazy loading for images
- Efficient scroll event handling
- Intersection Observer for animations

## SEO

The website includes:

- Meta tags for description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD) for Person profile
- Semantic HTML structure
- Sitemap-ready structure

## License

All rights reserved to Yazn (@yazn_108).

## Contact

For questions or project inquiries:

- **Developer**: yazn ahmed (yazn_108)
- **Website**: https://yazn-108.github.io/
- **GitHub**: https://github.com/yazn-108
- **Twitter**: https://x.com/yazn_108
- **Telegram**: https://t.me/yazn108
- **LinkedIn**: https://www.linkedin.com/in/yazn-ahmed
- **email**: yazn_108@outlook.sa
