import React from 'react';
const MenuItems = ({ menuItems, onOpenModal, pageHidden }) => {
  return (
    <div className='row'>
      {menuItems.map((menuItem) => (
        <div className='col-xxl-4 col-md-6 mt-2 mb-2' key={menuItem._id}>
          <div
            className={
              pageHidden
                ? 'menu-item-container items-visibility'
                : 'menu-item-container'
            }
          >
            <div className='item-img'>
              <img src={require(`../images/${menuItem.imageSrc}`)} />
            </div>
            <div className='item-name'>
              <h4>
                {menuItem.title}
                {' - '}
                <span className='text-success'>{menuItem.price} LE.</span>
              </h4>
            </div>
            <div className='add-to-card mt-4'>
              {!menuItem.AddedToCard && (
                <button
                  onClick={() => onOpenModal(menuItem)}
                  type='button'
                  className='btn btn-primary'
                >
                  Select to card
                </button>
              )}
              {menuItem.AddedToCard && (
                <button
                  onClick={() => onOpenModal(menuItem)}
                  type='button'
                  className='btn btn-warning'
                >
                  Edit in card
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
