
import './App.css';
import Loading from './components/Loading';
import NapBar from './components/NapBar';
import HomePage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './pages/noPage';
import ProjectPage from './pages/projectsPage';
import SkillsPage from './pages/skillsPage';
import AboutPage from './pages/aboutMePage';
import FootBar from './components/FootBar';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <NapBar />
      <Loading />
      <Routes>
        <Route path='*' element={<NoPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about me' element={<AboutPage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/skills' element={<SkillsPage />} />  
        <Route path='/contact me' element={<ContactMe />} />        
      </Routes>
      <FootBar />
    </BrowserRouter>
  );
}

export default App;
