import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/cart.component';
import SingleProduct from './components/single-product/single-product.component';
import UpdateCart from './components/update-cart/update-cart.component';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WatchList from './components/watchlist/watchlist.component';
import Category from './components/category/category.component';
import CartFooter from './components/cart-footer/cart-footer.component';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >
        <Switch>

          <Route path="/product/:id" strict={true}>
            <SingleProduct />
          </Route>
          <Route path="/update-cart" strict={true}>
            <UpdateCart />
          </Route>
          <Route path="/watchlist" strict={true}>
            <WatchList />
          </Route>
          <Route path="/category" strict={true}>
            <Category />
          </Route>
          <Route path="/" strict={true}>
            <Cart />
          </Route>
          {/* <Route path="/" strict={true}>
            <App />
          </Route> */}

        </Switch>
      </Router>
    </Provider>
    <CartFooter />
    <ToastContainer
      position="bottom-right"
      theme="dark"
      // transition="flip"
      hideProgressBar={false}
      autoClose={2000}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
