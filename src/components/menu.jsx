import React from 'react';
import MenuItems from './menuItems';
import SelectItemToCard from './selectItemToCard';

const Menu = ({
  menuItems,
  onOpenModal,
  onCloseModal,
  pageHidden,
  onAddToCard,
  onEditInCard,
  onRemoveFromCard,
  onInputValue,
  itemCount,
}) => {
  return (
    <div className='row'>
      <MenuItems
        menuItems={menuItems}
        onOpenModal={onOpenModal}
        pageHidden={pageHidden}
      />
      <SelectItemToCard
        onCloseModal={onCloseModal}
        onAddToCard={onAddToCard}
        onEditInCard={onEditInCard}
        onRemoveFromCard={onRemoveFromCard}
        menuItems={menuItems}
        onInputValue={onInputValue}
        itemCount={itemCount}
      />
    </div>
  );
};

export default Menu;
