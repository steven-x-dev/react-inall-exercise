import React from 'react';
import {Link} from 'react-router-dom';
import './icon.less';

const Icon = props => (
  <div className='icon-box'>
    <Link to={props.link}>
      <img src={props.src} className='icon-image' alt={`${props.alt} icon`} />
      <p>{props.name}</p>
    </Link>
  </div>
);

export default Icon;
