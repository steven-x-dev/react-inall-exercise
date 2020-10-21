import React from 'react';
import './app.less';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import Calculator from './features/calculator/Calculator';
import Timer from './features/timer/Timer';
import ContentWrapper from './features/ContentWrapper';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <nav className='nav-bar'>
        <div className='link-wrapper'>
          <Link to='/'>HOME</Link>
          <Link to='/calculator'>在线计算器</Link>
          <Link to='/timer'>在线倒计时器</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/calculator'>
          <ContentWrapper
            name="在线计算器"
            component={<Calculator />}
          />
        </Route>
        <Route path='/timer'>
          <ContentWrapper
            name="在线倒计时器"
            component={<Timer />}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
