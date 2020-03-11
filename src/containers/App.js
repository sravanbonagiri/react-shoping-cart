import React, { Component } from 'react';
import "../tachyon.css";
import PRODUCTS from "../Data"
import Products from "../components/products/Products"
import { connect } from 'react-redux';
import CartList from '../components/cart/CartList';
import { bindActionCreators } from "redux"
import { addToCartAction } from "../redux/actions/cart_action"


class App extends Component{
  render(){
    const {cart, addToCartAction} = this.props;
    return (
      <div className="pa3 pa5-ns w-100">
        <CartList cart={cart} />
        <Products products={PRODUCTS} addToCartAction={addToCartAction} />
      </div>
    )
  }
}

const mapStateToProps =({cart}) => {
  return{
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
    addToCartAction
  }, dispatch )
}

export default connect(mapStateToProps, mapActionsToProps)(App);
