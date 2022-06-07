import React, { Component } from 'react';
import { withRouter } from './withRouter';
import { getmenuItems } from '../services/fakeMenuItemsService';
import { getSections } from '../services/fakeSectionService';
import Menu from './menu';
import MenuSections from './menuSections';
import ViewCard from './viewCard';
import Card from './card';

class OrderNow extends Component {
  state = {
    menuItems: [],
    sections: [],
    selectedSection: { _id: '' },
    pageHidden: false,
    card: {
      cardItems: [],
      totalItemsPrice: 0,
      cardHidden: true,
    },
    yourOrders: {
      previousOrders: [],
      activeOrder: false,
    },
  };

  componentDidMount() {
    let sections = [{ _id: '', name: 'All Sections' }, ...getSections()];
    let pureMenuItems = [...getmenuItems()];
    let menuItems = pureMenuItems.map((obj) => ({
      ...obj,
      isHidden: true,
      AddedToCard: false,
      count: 1,
      totalPrice: 0,
    }));
    this.setState({
      menuItems,
      sections,
    });
  }

  handleInputValue = (menuItem, event) => {
    let menuItems = this.state.menuItems;
    menuItem.count = event.currentTarget.value;
    this.setState({ menuItems });
  };

  handleSections = (section) => {
    this.setState({ selectedSection: section });
  };

  handleAddToCard = (menuItem) => {
    let menuItems = this.state.menuItems;
    let card = this.state.card;

    menuItem.AddedToCard = true;
    menuItem.totalPrice = menuItem.price * menuItem.count;
    menuItem.isHidden = true;

    let pageHidden = false;

    card.cardItems.push(menuItem);
    card.totalItemsPrice = card.cardItems.reduce(
      (n, { totalPrice }) => n + totalPrice,
      0
    );

    this.setState({ card, menuItems, pageHidden });
  };

  handleEditInCard = (menuItem) => {
    let menuItems = this.state.menuItems;
    let card = this.state.card;

    menuItem.totalPrice = menuItem.price * menuItem.count;
    menuItem.isHidden = true;

    let pageHidden = false;

    card.cardItems.push(menuItem);

    card.cardItems = card.cardItems.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t._id === value._id)
    );

    card.totalItemsPrice = card.cardItems.reduce(
      (n, { totalPrice }) => n + totalPrice,
      0
    );

    this.setState({ card, menuItems, pageHidden });
  };

  handleRemoveFromCard = (menuItem) => {
    let menuItems = this.state.menuItems;
    let card = this.state.card;

    menuItem.AddedToCard = false;

    let filteredCardItems = card.cardItems.filter(
      (m) => m._id !== menuItem._id
    );
    card.cardItems = [...filteredCardItems];

    card.totalItemsPrice -= menuItem.totalPrice;
    menuItem.totalPrice = 0;

    menuItem.isHidden = true;
    let pageHidden = false;

    this.setState({ card, menuItems, pageHidden });
  };

  handleOpenModal = (menuItem) => {
    let menuItems = this.state.menuItems;
    menuItem.isHidden = false;
    let pageHidden = true;
    this.setState({ menuItems, pageHidden });
  };

  handleCloseModal = (menuItem) => {
    let menuItems = this.state.menuItems;
    menuItem.isHidden = true;
    let pageHidden = false;
    this.setState({ menuItems, pageHidden });
  };

  handleOpenCard = () => {
    let card = this.state.card;
    card.cardHidden = false;
    let pageHidden = true;
    this.setState({ card, pageHidden });
  };

  handleCloseCard = () => {
    let card = this.state.card;
    card.cardHidden = true;
    let pageHidden = false;
    this.setState({ card, pageHidden });
  };

  handleCardEmpty = () => {
    let card = this.state.card;
    card.cardItems = [];
    card.totalItemsPrice = 0;
    card.cardHidden = true;
    let pageHidden = false;
    let menuItems = this.state.menuItems;
    menuItems.forEach((menuItem) => {
      menuItem.AddedToCard = false;
    });
    this.setState({ card, pageHidden, menuItems });
  };

  handleCheckout = () => {
    let card = this.state.card;
    let yourOrders = this.state.yourOrders;
    yourOrders.previousOrders.push(card);
    yourOrders.activeOrder = true;
    card = [];
    this.setState({ card, yourOrders });
    console.log(card);
    console.log(yourOrders);
    this.props.navigate('/track');
  };

  render() {
    const {
      menuItems,
      sections,
      selectedSection,
      pageHidden,
      cardOrder,
      card,
    } = this.state;
    const filtered =
      selectedSection && selectedSection._id
        ? menuItems.filter((s) => s.section._id === selectedSection._id)
        : menuItems;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='fixed-side'>
              <MenuSections
                onSections={this.handleSections}
                sections={sections}
                selectedSection={selectedSection}
                pageHidden={pageHidden}
              />
              <ViewCard
                onOpenCard={this.handleOpenCard}
                pageHidden={pageHidden}
              />
            </div>
          </div>
          <div className='col-md-9'>
            <Menu
              menuItems={filtered}
              onOpenModal={this.handleOpenModal}
              onCloseModal={this.handleCloseModal}
              pageHidden={pageHidden}
              onAddToCard={this.handleAddToCard}
              onEditInCard={this.handleEditInCard}
              onRemoveFromCard={this.handleRemoveFromCard}
              cardOrder={cardOrder}
              card={card}
              onInputValue={this.handleInputValue}
            />
          </div>
        </div>
        <Card
          card={card}
          onCloseCard={this.handleCloseCard}
          onCardEmpty={this.handleCardEmpty}
          onCheckout={this.handleCheckout}
        />
      </div>
    );
  }
}

export default withRouter(OrderNow);
