import Home from './components/home';
import NavBar from './components/navBar';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import YourOrders from './components/yourOrders';
import TrackOrder from './components/trackOrder';
import NotFound from './components/notFound';
import OrderNow from './components/orderNow';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='orders' element={<YourOrders />} />
        <Route path='track' element={<TrackOrder />} />
        <Route path='new' element={<OrderNow />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate replace to='/notfound' />} />
      </Routes>
    </div>
  );
}

export default App;
