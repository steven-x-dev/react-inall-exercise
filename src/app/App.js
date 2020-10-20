import React, {Component} from 'react';
import './app.less';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Home from "./home/Home";
import Calculator from "./calculator/Calculator";
import Timer from "./timer/Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className='nav-bar'>
            <div className='link-wrapper'>
              <Link exact to='/'>HOME</Link>
              <Link to='/calculator'>在线计算器</Link>
              <Link to='/timer'>在线倒计时器</Link>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/calculator' component={Calculator} />
            <Route path='/timer' component={Timer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
