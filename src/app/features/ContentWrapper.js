import React from 'react';
import './contentWrapper.less';

const ContentWrapper = props => (
  <div className='content-wrapper'>
    <h2>{props.name}</h2>
    <div>{props.component}</div>
  </div>
);

export default ContentWrapper;
