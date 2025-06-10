import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/henrique_adv/">
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;