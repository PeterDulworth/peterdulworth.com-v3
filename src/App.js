import React from 'react';
import './styles/_index.scss';
import LandingPage from './components/LandingPage';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Content />
    </div>
  );
}

export default App;
