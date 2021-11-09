import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello() {
  return (
   <div>
    <h1>Welcome to React</h1>
    <p>Let's build something cool.</p>
    </div>
  )
    }

let city = {
  name: "Madrid",
  country: "Spain"
};

ReactDOM.render(
  <Hello></Hello>,
  
  document.getElementById('root')
);
