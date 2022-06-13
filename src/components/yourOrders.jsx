import React, { Fragment } from 'react';
const YourOrders = ({ yourOrders }) => {
  let cardItems = yourOrders.previousOrders.map((a) => a.cardItems);
  let calcPrice = (item) => {
    return item.reduce((accumulator, object) => {
      return accumulator + object.totalPrice;
    }, 0);
  };

  return (
    <div className='your-orders'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Items</th>
            <th scope='col'>Total Items Price</th>
          </tr>
        </thead>
        {cardItems.length !== 0 && (
          <tbody>
            {cardItems.map((items) => (
              <tr
                key={
                  Math.random() +
                  items.map((item) => item.title).join('') +
                  Math.random()
                }
              >
                <td>
                  {items.map((item) => (
                    <Fragment key={Math.random() + item.title + Math.random()}>
                      <b className='mc-red'>{item.title}</b> Item Price:{' '}
                      {item.price} LE, Item Count: {item.count}, Item Total
                      Price: {item.totalPrice} LE
                      <br />
                    </Fragment>
                  ))}
                </td>
                <td>{calcPrice(items)} LE</td>
              </tr>
            ))}
          </tbody>
        )}
        {cardItems.length === 0 && (
          <tbody>
            <tr className='error-in-tr text-danger'>
              <td>There are no previous orders, order Now your first one.</td>
              <td>Zero</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default YourOrders;
