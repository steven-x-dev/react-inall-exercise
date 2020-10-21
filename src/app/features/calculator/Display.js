import React from 'react';
import './display.less';

const Display = props => (
  <div className="display">
    <p className="display-text">{props.text}</p>
  </div>
);

export default Display;
