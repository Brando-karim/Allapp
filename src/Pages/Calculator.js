import React, { useContext, useState } from 'react';
import './Calc.css';
import ResultView from '../components/ResultView';
import Keyboard from '../components/Keyboard';
import { FirstContext } from './Acceuil';

let output = '';
let history = '';
const symbols = ['*', '-', '+', '/'];

export default function Calculator() {
  const { IsDark, setIsDark } = useContext(FirstContext);
  const [state, setState] = useState({
    history: '',
    displayValue: ''
  });

  const updateState = () => {
    setState({ history: history.toString(), displayValue: output.toString() });
  };

  const onClick = (id, keyType, value) => {
    output = output.toString();
    let lastInput = output.slice(-1);

    switch (keyType) {
      case 'function':
        functionKey(id, lastInput);
        break;
      case 'operator':
        operatorKey(value, lastInput);
        break;
      case 'number':
        numberKey(value, lastInput);
        break;
      default:
        return;
    }
  };

  const functionKey = (id, lastInput) => {
    const resetOutput = display => {
      history = '';
      output = '';
      display && updateState();
    };

    const calculate = lastInput => {
      if (!symbols.includes(lastInput) && output) {
        try {
          history = output;
          output = eval(output.replace(/%/g, '*0.01'));
          output = Number.isInteger(output) ? output : output.toFixed(3);
          updateState();
          history = output;
          output = '';
        } catch (error) {
          output = 'Error';
          updateState();
          resetOutput();
        }
      }
    };

    switch (id) {
      case 'clear':
        resetOutput(true);
        break;
      case 'clearBack':
        output = output.slice(0, -1);
        updateState();
        break;
      case 'calc':
        calculate(lastInput);
        break;
      default:
        return;
    }
  };

  const operatorKey = (value, lastInput) => {
    if (output === '' && value !== '-') {
      return;
    } else {
      symbols.includes(lastInput)
        ? (output = output.slice(0, -1) + value)
        : (output += value);
    }
    updateState();
  };

  const numberKey = (value, lastInput) => {
    if (value === '.' || value === '%') {
      if (output === '' && value === '%') return;
      lastInput === '.' || lastInput === '%' || (output += value);
    } else {
      output += value;
    }
    updateState();
  };

  const change = () => {
    setIsDark(!IsDark);
  };

  return (
    <div>
      <button style={{ border: 'none', float: 'right', background :'none',ursor: 'pointer' }} className='NiMode' onClick={change}>
	  {!IsDark ? <img width="48" height="48" src="https://img.icons8.com/pulsar-gradient/48/do-not-disturb-2.png" alt="do-not-disturb-2" /> : <img width="48" height="48" src="https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png" alt="do-not-disturb-2" />}
      </button>
      <div className={IsDark ? "LightModeC" : "DarkModeC"}>
        <div className="app">
          <div className="sick">
            <ResultView history={state.history} output={state.displayValue} />
            <Keyboard onClick={onClick} className="what"/>
          </div>
        </div>
      </div>
    </div>
  );
}
