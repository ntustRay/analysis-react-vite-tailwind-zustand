# Analysis React Vite Tailwind Zustand

## About

This project is a single-page built with React, Vite, Tailwind CSS, and Zustand.  
The application is designed to provide users with real-time weather information and population growth data for Taiwan.  
The project is deployed on GitHub Pages.

## How to practice

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ntustray/analysis-react-vite-tailwind-zustand.git
cd analysis-react-vite-tailwind-zustand
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. Build the project for production:
```bash
npm run build
```
5. Deploy the project to GitHub Pages:
```bash
npm run deploy
```

## Architecture
The project is structured as follows:

```bash
src/
|-- assets/           # Static assets like images, icons, etc.
|-- components/       # Reusable UI components (Header, Sidebar, etc.)
|-- pages/            # Pages representing different views (WeatherPage, PopulationPage)
|-- stores/           # Zustand stores for state management
|-- data/             # Static data files (e.g., populationData.js)
|-- App.jsx           # Root component containing the main Router
|-- main.jsx          # Application entry point
|-- index.css         # Global styles using Tailwind CSS
|-- vite.config.js    # Vite configuration file
```
### Routing
/: Home page displaying the weather information.  
/population: Population growth chart page.  
#### State Management  
Zustand is used for state management, keeping the application state simple and modular.  

## Tech stack
React: A JavaScript library for building user interfaces.  
Vite: A fast development environment and build tool optimized for modern web development.  
Tailwind CSS: A utility-first CSS framework for creating custom designs without writing custom CSS.  
Zustand: A small, fast, and scalable state management solution for React.  
MUI (Material-UI): A popular React UI framework, used for creating responsive and attractive UI components.  
GitHub Pages: Hosting for this project, which allows easy deployment of static sites directly from the repository.  
