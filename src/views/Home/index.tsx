import React from 'react';

// import Button from 'components/Button';

const Home = () => {
  return (
    <div className={'home'}>
      <h1 className={'home-title'}>
        A better way
        <br />
        to enjoy every day.
      </h1>
      <h5 className={'home-subtitle'}>Be the first to know when we launch</h5>
      <button className={'home-request-button'}>Request an Invite</button>
    </div>
  );
};

export default Home;
