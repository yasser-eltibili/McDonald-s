import React, { Component } from 'react';
import Home from './components/home';
import NavBar from './components/navBar';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getmenuItems } from './services/fakeMenuItemsService';
import { getSections } from './services/fakeSectionService';
import { withRouter } from '../src/components/withRouter';
import YourOrders from './components/yourOrders';
import NotFound from './components/notFound';
import OrderNow from './components/orderNow';

class App extends Component {
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

  componentDidMount = () => {
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
  };

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
    let menuItems = this.state.menuItems;
    let pageHidden = false;
    let yourOrders = this.state.yourOrders;
    yourOrders.previousOrders.push(card);
    card = {
      cardItems: [],
      totalItemsPrice: 0,
      cardHidden: true,
    };
    menuItems.forEach((menuItem) => {
      menuItem.AddedToCard = false;
    });
    this.setState({ card, yourOrders, pageHidden, menuItems });
    this.props.navigate('/orders');
  };

  render() {
    const {
      menuItems,
      sections,
      selectedSection,
      pageHidden,
      cardOrder,
      card,
      yourOrders,
    } = this.state;
    const filtered =
      selectedSection && selectedSection._id
        ? menuItems.filter((s) => s.section._id === selectedSection._id)
        : menuItems;
    return (
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='orders'
            element={<YourOrders yourOrders={yourOrders} />}
          />
          <Route
            path='new'
            element={
              <OrderNow
                sections={sections}
                selectedSection={selectedSection}
                pageHidden={pageHidden}
                cardOrder={cardOrder}
                card={card}
                menuItems={filtered}
                onSections={this.handleSections}
                onAddToCard={this.handleAddToCard}
                onCardEmpty={this.handleCardEmpty}
                onCheckout={this.handleCheckout}
                onCloseCard={this.handleCloseCard}
                onCloseModal={this.handleCloseModal}
                onEditInCard={this.handleEditInCard}
                onInputValue={this.handleInputValue}
                onOpenCard={this.handleOpenCard}
                onOpenModal={this.handleOpenModal}
                onRemoveFromCard={this.handleRemoveFromCard}
              />
            }
          />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/notfound' />} />
        </Routes>
      </div>
    );
  }
}

export default withRouter(App);
