import React from 'react';
const Card = ({ card, onCloseCard, onCardEmpty, onCheckout }) => {
  return (
    <div>
      <div
        className={
          card.cardHidden ? 'popup card-popup hide' : 'popup card-popup'
        }
      >
        <div className='popup-header'>
          <h2>Card details</h2>
          <span onClick={onCloseCard} className='close'>
            close
          </span>
        </div>
        {card.totalItemsPrice && (
          <div className='popup-body card-data'>
            {card.cardItems.map((cardItem) => (
              <div className='card-item-detail' key={cardItem._id}>
                <div className='row'>
                  <div>
                    <p>
                      <b>Item name: </b> {cardItem.title} - <b>Item Price: </b>
                      {cardItem.price} LE
                    </p>
                    <p>
                      <b>Item count: </b> {cardItem.count} -{' '}
                      <b>Item Total price: </b> {cardItem.totalPrice} LE
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className='row'>
              <div className='price mb-2'>
                <h5>final price: {card.totalItemsPrice}</h5>
              </div>
            </div>
            <div className='card-actions'>
              <button
                onClick={onCheckout}
                className='btn btn-primary ms-1 me-1'
              >
                Checkout
              </button>
              <button
                onClick={onCardEmpty}
                className='btn btn-danger ms-1 me-1'
              >
                Empty the card
              </button>
            </div>
          </div>
        )}

        {!card.totalItemsPrice && (
          <div className='popup-body text-danger'>
            <h4>Card still empty</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
