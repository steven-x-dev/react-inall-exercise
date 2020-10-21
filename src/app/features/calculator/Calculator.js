import React, {Component} from 'react';
import './calculator.less';
import Display from "./Display"
import Button from "./Button";

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initState
    };
  }

  renderRow = (keyrow, i) => (
    <div className='keypad-row' key={i}>
      {keyrow.map(key => (
        <div onClick={this.handleClick(key)} key={key.text}>
          <Button clazz={key.clazz} text={key.text} />
        </div>
      ))}
    </div>
  );

  handleClick = key => () => {
    const {
      display,
      progress,
      first,
      second,
      operator
    } = this.state;
    if (key.clazz === 'opr') {
      if (progress >= 2) {
        this.clear();
      } else {
        this.setState({
          progress: 2,
          operator: key.text,
          display: display + key.text
        });
      }
    } else if (key.clazz ===  'num') {
      if (progress === 3) {
        if (second === '0' && key.text !== '0') {
          this.setState({
            second: key.text,
            display: display.slice(0, -1) + key.text
          });
        } else if (second !== '0' || key.text !== '0') {
          this.setState({
            second: second + key.text,
            display: display + key.text
          });
        }
      } else if (progress === 2) {
        this.setState({
          progress: 3,
          second: key.text,
          display: display + key.text
        });
      } else if (progress === 1) {
        if (first === '0' && key.text !== '0') {
          this.setState({
            first: key.text,
            display: key.text
          });
        } else if (first !== '0' || key.text !== '0') {
          this.setState({
            first: first + key.text,
            display: display + key.text
          });
        }
      } else {
        this.setState({
          progress: 1,
          first: key.text,
          display: key.text
        });
      }
    } else if (key.clazz ===  'exe') {
      if (progress === 2) {
        this.clear();
      } else {
        const firstNum = parseInt(first);
        const secondNum = parseInt(second);
        let result;
        if (operator === '+') {
          result = firstNum + secondNum;
        } else if (operator === '-') {
          result = firstNum - secondNum;
        } else {
          result = firstNum * secondNum;
        }
        this.setState({
          ...initState,
          display: '' + result
        });
      }
    }
  }

  clear = () => {
    this.setState({
      ...initState
    });
  }

  render() {
    const { display } = this.state;
    return (
      <div className='calculator'>
        <div className='calculator-body'>
          <Display text={display} />
          {keys.map((keyrow, i) => this.renderRow(keyrow, i))}
        </div>
      </div>
    );
  }
}

const keys = [
  [{clazz: 'opr', text: '+'}, {clazz: 'opr', text: '-'},     {clazz: 'opr', text: '×'}],
  [{clazz: 'num', text: '7'}, {clazz: 'num', text: '8'},     {clazz: 'num', text: '9'}],
  [{clazz: 'num', text: '4'}, {clazz: 'num', text: '5'},     {clazz: 'num', text: '6'}],
  [{clazz: 'num', text: '1'}, {clazz: 'num', text: '2'},     {clazz: 'num', text: '3'}],
  [{clazz: 'num', text: '0'}, {clazz: 'clr', text: 'Clear'}, {clazz: 'exe', text: '='}]
];

const initState = {
  display: '0',
  progress: 0,
  first: '0',
  second: null,
  operator: null
};

export default Calculator;
