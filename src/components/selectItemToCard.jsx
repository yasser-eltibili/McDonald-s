import React from 'react';
const SelectItemToCard = ({
  menuItems,
  onCloseModal,
  onAddToCard,
  onEditInCard,
  onRemoveFromCard,
  onInputValue,
}) => {
  return (
    <div>
      {menuItems.map((menuItem) => (
        <div
          id={'popup-' + menuItem._id}
          key={menuItem._id}
          className={menuItem.isHidden ? 'popup hide' : 'popup'}
        >
          <div className='popup-header'>
            <h2>{menuItem.title}</h2>
            <span onClick={() => onCloseModal(menuItem)} className='close'>
              close
            </span>
          </div>
          {!menuItem.AddedToCard && (
            <div className='popup-body'>
              <div className='form-group mb-2'>
                <label htmlFor='number-of-item'>
                  Number of {menuItem.title}
                </label>
                <input
                  type='number'
                  min='1'
                  max='50'
                  className='form-control'
                  id='number-of-item'
                  aria-describedby='numberHelp'
                  placeholder='Select number from 1 to 50'
                  value={menuItem.count}
                  onChange={(event) => onInputValue(menuItem, event)}
                />
                <small id='numberHelp' className='form-text text-muted'>
                  Select the number you want from {menuItem.title} in your
                  order.
                </small>
              </div>
              <button
                onClick={() => onAddToCard(menuItem)}
                type='button'
                className='btn btn-primary mt-2'
              >
                Add to card
              </button>
            </div>
          )}
          {menuItem.AddedToCard && (
            <div className='popup-body'>
              <div className='form-group mb-2'>
                <label htmlFor='number-of-item'>
                  Edit Number of {menuItem.title}
                </label>
                <input
                  type='number'
                  min='1'
                  max='50'
                  className='form-control'
                  id='number-of-item'
                  aria-describedby='numberHelp'
                  placeholder='Select number from 1 to 50'
                  value={menuItem.count}
                  onChange={(event) => onInputValue(menuItem, event)}
                />
                <small id='numberHelp' className='form-text text-muted'>
                  Edit the number of {menuItem.title} from your order.
                </small>
              </div>
              <div>
                <button
                  onClick={() => onEditInCard(menuItem)}
                  type='button'
                  className='btn btn-primary mt-2'
                >
                  Edit {menuItem.title} in card
                </button>
              </div>
              <div>
                <button
                  onClick={() => onRemoveFromCard(menuItem)}
                  type='button'
                  className='btn btn-warning mt-2'
                >
                  Remove {menuItem.title} from card
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectItemToCard;
