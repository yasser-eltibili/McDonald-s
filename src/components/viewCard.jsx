import React from 'react';
const ViewCard = ({ onOpenCard, pageHidden }) => {
  return (
    <button
      onClick={onOpenCard}
      className={
        pageHidden
          ? 'btn btn-success btn-lg mt-4 btn-visibility'
          : 'btn btn-success btn-lg mt-4'
      }
    >
      View Card
    </button>
  );
};

export default ViewCard;
