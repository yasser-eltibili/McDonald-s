import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='home'>
      <div className='container'>
        <div className='mcdonalds mb-3'>
          <img src={require('../images/mcdonalds.jpg')} />
        </div>
        <hr />
        <button
          className='btn btn-primary btn-lg m-2'
          onClick={() => {
            navigate(`/new`);
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
