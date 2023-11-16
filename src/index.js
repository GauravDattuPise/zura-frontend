import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProjectListing from './components/pages/projectListing/ProjectListing';
import CreateNewProject from './components/buttons/ProjectButton';
import LeftDrawer from './components/drawer/Drawer';
import ResponsiveDrawer from './components/drawer/Drawer';
import Register from './components/pages/register/Register';
import Login from './components/pages/login/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-project' element={<App />} />
        <Route path='/project-listing' element={<ProjectListing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
