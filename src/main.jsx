import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FerryPage from './components/FerryPage';
import GetRequestApp from './components/GetRequestApp';
import PostsRequestApp from './components/PostsRequestApp';
import JokePage from './components/JokePage';
import PhotoApp from './components/PhotoApp';
import NavBar from './components/NavBar';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/FerryPage" element={<FerryPage/>} />
        <Route path="/GetRequestApp" element={<GetRequestApp />} />
        <Route path="/PostsRequestApp" element={<PostsRequestApp />} />
        <Route path="/JokePage" element={<JokePage />} />
        <Route path="/PhotoApp" element={<PhotoApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);