import React from 'react';
import './button.less';

const Button = props => <div className={`button ${props.clazz}`}>{props.text}</div>;

export default Button;
