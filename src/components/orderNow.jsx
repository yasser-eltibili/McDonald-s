import React from 'react';

import Menu from './menu';
import MenuSections from './menuSections';
import ViewCard from './viewCard';
import Card from './card';

const OrderNow = ({
  sections,
  selectedSection,
  pageHidden,
  menuItems,
  cardOrder,
  card,
  onSections,
  onAddToCard,
  onCardEmpty,
  onCheckout,
  onCloseCard,
  onCloseModal,
  onEditInCard,
  onInputValue,
  onOpenCard,
  onOpenModal,
  onRemoveFromCard,
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='fixed-side'>
            <MenuSections
              onSections={onSections}
              sections={sections}
              selectedSection={selectedSection}
              pageHidden={pageHidden}
            />
            <ViewCard onOpenCard={onOpenCard} pageHidden={pageHidden} />
          </div>
        </div>
        <div className='col-md-9'>
          <Menu
            menuItems={menuItems}
            onOpenModal={onOpenModal}
            onCloseModal={onCloseModal}
            pageHidden={pageHidden}
            onAddToCard={onAddToCard}
            onEditInCard={onEditInCard}
            onRemoveFromCard={onRemoveFromCard}
            cardOrder={cardOrder}
            card={card}
            onInputValue={onInputValue}
          />
        </div>
      </div>
      <Card
        card={card}
        onCloseCard={onCloseCard}
        onCardEmpty={onCardEmpty}
        onCheckout={onCheckout}
      />
    </div>
  );
};

export default OrderNow;
