import React from 'react'
import HeaderComponent from './content/HeaderComponent'
import WhyComponent from './content/WhyComponent'
import './App.css'


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <p>What is something bad that happened?</p>
      <WhyComponent first={true} id={1}/>
    </div>
  );
}

export default App;
