import React, {Component} from 'react';
import './timer.less';
import {Link} from "react-router-dom";

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: '',
      remaining: 0,
      clickable: true,
      display: 'Start',
      timer: null
    };
  }

  componentWillUnmount() {
    const { timer } = this.state;
    if (timer !== null) {
      clearInterval(timer);
    }
  }

  handleTimeChange = ({ target: { value } }) => {
    this.setState({
      time: value
    });
  };

  displayTime = time => time > 1 ? `${time} Seconds` : `${time} Second`;

  startTimer = () => {
    const { time, clickable } = this.state;
    if (!clickable) return;
    const number = parseInt(time);
    if (!number || number < 0 || number > 9999) return;
    this.setState({
      remaining: number,
      clickable: false,
      display: this.displayTime(number)
    }, this.executeTimer);
  }

  executeTimer = () => {
    const timer = setInterval(() => {
      const { remaining } = this.state;
      if (remaining === 1) {
        clearInterval(timer);
        this.setState({
          display: 'End',
          clickable: true,
          timer: null
        });
      } else {
        const nextRemaining = remaining - 1;
        this.setState({
          remaining: nextRemaining,
          display: this.displayTime(nextRemaining)
        });
      }
    }, 1000);
    this.setState({
      timer: timer
    });
  }

  render() {
    const { display, clickable } = this.state;
    return (
      <div className='timer-wrapper'>
        <div className='timer'>
          <div className='section input-section'>
            <div className='time-setter'>
              设置时间
              <input
                type='number'
                max={9999}
                min={1}
                name='time'
                value={this.state.time}
                onChange={this.handleTimeChange} />
            </div>
            <div className={`start-button ${clickable ? 'clickable' : 'unclickable'}`} onClick={this.startTimer}>
              Start
            </div>
          </div>
          <div className='section'>
            <div className='display-section'>
              {display}
            </div>
          </div>
        </div>
        <div className='back-wrapper'>
          <Link to='/' className='back'><h3>回到主页</h3></Link>
        </div>
      </div>
    );
  }
}

export default Timer;
