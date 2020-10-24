import React, {Component} from 'react';
import './timer.less';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'Start'
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className='timer'>
        <div className='section input-section'>
          <div className='time-setter'>
            设置时间
            <input type='number' max={9999} min={1} />
          </div>
          <div className='start-button'>
            Start
          </div>
        </div>
        <div className='section'>
          <div className='display-section'>
            {display}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
