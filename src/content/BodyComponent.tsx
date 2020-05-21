import React from 'react'
import WhyComponent from './WhyComponent';

function BodyComponent() {
    return (
        <div className="App-body">
            <p>What is something bad that happened?</p>
            <WhyComponent first={true} id={1}/>
        </div>
    );
  }
  
  export default BodyComponent;