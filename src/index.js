import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProjectListing from './components/pages/projectListing/ProjectListing';
import CreateNewProject from './components/buttons/ProjectButton';
import LeftDrawer from './components/drawer/Drawer';
import ResponsiveDrawer from './components/drawer/Drawer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ProjectListing/> */}
    {/* <CreateNewProject/> */}
{/* <ResponsiveDrawer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
