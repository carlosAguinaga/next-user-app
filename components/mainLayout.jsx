import React from 'react';
import Navbar from './navbar';

const mainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default mainLayout;
