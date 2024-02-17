import React from 'react';

const MarqueeText = ({ text }) => {
  return (
    <div className='marquee'>
      {text} {text}
    </div>
  );
};

export default MarqueeText;
