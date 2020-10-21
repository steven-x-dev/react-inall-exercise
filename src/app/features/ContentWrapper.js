import React from 'react';
import './contentWrapper.less';

const ContentWrapper = props => (
  <div className="content-wrapper">
    <h2>{props.name}</h2>
    {props.component}
  </div>
);

export default ContentWrapper;
