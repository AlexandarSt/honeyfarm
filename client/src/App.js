import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ScrollToTop from 'react-router-scroll-top';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Contact from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';
// import Order from './pages/order/order.component.jsx';
import Footer from './components/footer/footer.component';
import UserForm from './components/user-order/user-form.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <ScrollToTop>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/order' component={UserForm} />
      </ScrollToTop>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
