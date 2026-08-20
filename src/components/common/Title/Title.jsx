// import React from 'react';

const Title = ({titleDecription, titleHeading}) => {
  return (
    <div className="title">
      <div className="title-container">
        <p>{titleDecription}</p>
        <h2>{titleHeading}</h2>
      </div>
    </div>
  );
}

export default Title;
