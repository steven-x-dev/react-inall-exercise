import React from 'react';
import './home.less';
import hero from '../../images/hero-image.png';
import calculator from '../../images/calculator.png';
import timer from '../../images/timer.png';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img src={hero} className="hero-image" alt="background" />
      </div>
      <div>
        <div className="feature-box">
          <img src={calculator} className="calculator-image" alt="calculator icon" />
          <p>
            <Link to='/calculator'>计算器</Link>
          </p>
        </div>
        <div className="feature-box">
          <img src={timer} className="timer-image" alt="timer icon" />
          <p>
            <Link to='/timer'>倒计时器</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
