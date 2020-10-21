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
    if (key.clazz === 'opr') {
      this.setState({
        hasFirst: true,
        hasOperator: true,
        operator: key.text,
        display: this.state.display + key.text
      });
    } else if (key.clazz ===  'num') {
      if (this.state.hasSecond) {
        if (this.state.second === '0' && key.text !== '0') {
          this.setState({
            second: key.text,
            display: this.state.display.slice(0, -1) + key.text
          });
        } else if (this.state.second !== '0' || key.text !== '0') {
          this.setState({
            second: this.state.second + key.text,
            display: this.state.display + key.text
          });
        }
      } else if (this.state.hasOperator) {
        this.setState({
          hasSecond: true,
          second: key.text,
          display: this.state.display + key.text
        });
      } else if (this.state.hasFirst) {
        if (this.state.first === '0' && key.text !== '0') {
          this.setState({
            first: key.text,
            display: key.text
          });
        } else if (this.state.first !== '0' || key.text !== '0') {
          this.setState({
            first: this.state.first + key.text,
            display: this.state.display + key.text
          });
        }
      } else {
        this.setState({
          hasFirst: true,
          first: key.text,
          display: key.text
        });
      }
    } else if (key.clazz ===  'exe') {
      if (this.state.operator === '+') {
        this.setState({
          display: '' + (parseInt(this.state.first) + parseInt(this.state.second))
        });
      } else if (this.state.operator === '-') {
        this.setState({
          display: '' + (parseInt(this.state.first) - parseInt(this.state.second))
        });
      } else if (this.state.operator === '×') {
        this.setState({
          display: '' + (parseInt(this.state.first) * parseInt(this.state.second))
        });
      }
    }
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
  hasFirst: false,
  hasOperator: false,
  hasSecond: false,
  first: '0',
  second: null,
  operator: null
};

export default Calculator;
