import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/mediaPhone.css';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/noPage.tsx';
import Header from './components/header.tsx';
import Main from './components/main.tsx';
import Footer from './components/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
