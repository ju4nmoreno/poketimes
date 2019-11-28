import React from 'react';

const Raimbow = (WrappedComponent) => {
  const colours = ['red', 'blue', 'green', 'pink', 'yellow', 'orange'];
  const raimbowColours = colours[Math.floor( Math.random() * 5 )];
  const className = raimbowColours + '-text';
  return (props) => {
    return (
        <div className={className}>
          <WrappedComponent {...props}/>
        </div>);
  };
};

export default Raimbow;
