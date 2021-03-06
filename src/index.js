import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage/HomePage'
import NotConnected from './routes/NotConnected/NotConnected'
import NotFound from './routes/404/NotFound'
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route path="home" element={<HomePage/>}/>
          <Route path="auth" element={<NotConnected/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
