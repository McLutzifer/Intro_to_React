import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
  console.log(Object.keys(props));
  return (
   <div>
    <h1>Welcome to {props.library}</h1>
    <p>Let's build something cool.</p>
    <p>{props.message}</p>
    <p>{props.number} Props total</p>
    </div>
  )
    }



ReactDOM.render(
  <Hello 
  library="React" 
  message="Have fun!"
  number={3}></Hello>,
  
  document.getElementById('root')
);
