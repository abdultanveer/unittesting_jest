import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/application';
import Skills from './components/skills/Skills';
import Counter from './components/counter/counter';


//npm run test -- --coverage .


function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Application/>
      <Skills skills={["html","css",]}/> */}
    </div>
  );
}

export default App;
