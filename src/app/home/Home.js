import React from 'react';
import './home.less';
import calculator from '../../images/calculator.png';
import timer from '../../images/timer.png';
import Icon from './Icon';

const Home = () => (
  <div className='home'>
    <div className='title-area'>
      <div className='title-wrapper'>
        <p className='title-text'>在线实用工具</p>
      </div>
    </div>
    <div className='icon-area'>
      <div className='feature-boxes-wrapper'>
        <Icon
          link='/calculator'
          src={calculator}
          alt='calculator'
          name='计算器'
        />
        <Icon
          link='/timer'
          src={timer}
          alt='timer'
          name='倒计时器'
        />
      </div>
    </div>
  </div>
);

export default Home;
