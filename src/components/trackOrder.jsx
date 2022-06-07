import React from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';

const TrackOrder = () => {
  let navigate = useNavigate();
  const Completionist = () => navigate(`/orders`);
  return (
    <div>
      <h4>Remaining Time</h4>
      <h1>
        <Countdown daysInHours={true} date={Date.now() + 1800000}>
          <Completionist />
        </Countdown>
      </h1>
      <img src={require('../images/children.jfif')} />
      <h1>
        <b>Keep calm</b> - We are preparing your order <em>with a smile</em>
      </h1>
    </div>
  );
};

export default TrackOrder;
