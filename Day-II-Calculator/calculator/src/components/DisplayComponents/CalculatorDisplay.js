import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
   return <div className="display"><h3>{props.currentValue}</h3></div>
}

export default CalculatorDisplay;