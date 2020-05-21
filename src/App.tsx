import React from 'react'
import HeaderComponent from './content/HeaderComponent'
import './App.css'
import FooterComponent from './content/FooterComponent'
import BodyComponent from './content/BodyComponent'


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
