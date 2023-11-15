import React from 'react';
import './App.css';

import Header from './components/layout/Header';
import ProjectButton from './components/buttons/ProjectButton';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <h1 className="header">Create a New Project</h1>
      <img
        className="image-design"
        src="https://static.vecteezy.com/system/resources/previews/015/521/169/original/two-men-sitting-in-chairs-facing-each-other-having-in-busines-conversation-vector.jpg"
        alt="Two men sitting"
      />
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae magna sit amet neque vehicula. Maecenas facilisis est eget ligula consequat, in convallis elit scelerisque. Vivamus euismod, turpis a vel laoreet urna nisl in tortor. Suspendisse potenti. Quisque dapibus tincidunt sapien, non interdum ipsum suscipit eget. Nullam tristique sapien vel sapien egestas, et lobortis ipsum lacinia.
      </p>
     <ProjectButton/>
    </div>
  );
}

export default App;
