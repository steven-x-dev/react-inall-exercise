import React from 'react';
import './home.less';
import hero from '../../images/hero-image.png';
import calculator from '../../images/calculator.png';
import timer from '../../images/timer.png';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title-area">
        <div className="title-wrapper">
          <p className="title-text">在线实用工具</p>
        </div>
      </div>
      <div className="icon-area">
        <div className="feature-boxes-wrapper">
          <div className="feature-box">
            <Link to='/calculator'>
              <img src={calculator} className="icon-image" alt="calculator icon" />
              <p>计算器</p>
            </Link>
          </div>
          <div className="feature-box">
            <Link to='/timer'>
              <img src={timer} className="icon-image" alt="timer icon" />
              <p>倒计时器</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
