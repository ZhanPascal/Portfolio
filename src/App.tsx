import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { CvPage } from './components/pages/CvPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-soft-900 text-soft-900 dark:text-soft-50 transition-colors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
