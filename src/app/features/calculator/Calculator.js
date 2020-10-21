import React, {Component} from 'react';
import './calculator.less';
import Display from "./Display"
import Button from "./Button";

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 0
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className='calculator'>
        <div className='calculator-body'>
          <Display text={display} />
          {keys.map((keyrow, i) => renderRow(keyrow, i))}
        </div>
      </div>
    );
  }
}

const renderRow = (keyrow, i) => (
  <div className='keypad-row' key={i}>
    {keyrow.map(k => <Button clazz={k.clazz} text={k.text} key={k.text} />)}
  </div>
);

const keys = [
  [{clazz: 'opr', text: '+'}, {clazz: 'opr', text: '-'},     {clazz: 'opr', text: '×'}],
  [{clazz: 'num', text: '7'}, {clazz: 'num', text: '8'},     {clazz: 'num', text: '9'}],
  [{clazz: 'num', text: '4'}, {clazz: 'num', text: '5'},     {clazz: 'num', text: '6'}],
  [{clazz: 'num', text: '1'}, {clazz: 'num', text: '2'},     {clazz: 'num', text: '3'}],
  [{clazz: 'num', text: '0'}, {clazz: 'clr', text: 'Clear'}, {clazz: 'exe', text: '='}]
];

export default Calculator;
