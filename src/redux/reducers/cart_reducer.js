import {ADD_TO_CART} from "../actions/cart_action"

const INITIAL_STATE =[
    {
      id: 1,
      name: "Prod A1",
      description: "This is a new product",
      img: "http://tachyons.io/img/avatar_1.jpg",
      price: 20,
      units: 3
    }
]

export default function cartReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state

      const existingProdIndex = findProductIndex(cart, product.id)

      const updatedCart = existingProdIndex >= 0 ? updateProductUnits(cart, product) : [...cart, product]

      return updatedCart;
    }
  }
  return state;
}

const findProductIndex = (cart, productId) => {
  return cart.findIndex(p => p.id === productId);
};

const updateProductUnits = (cart, product) => {
  const prodIndex = findProductIndex(cart, product.id);
  const updatedCart = [...cart];
  const existingProd = updatedCart[prodIndex]
  const updatedUnitsProd = {
    ...existingProd,
    units: existingProd.units + product.units
  };

  updatedCart[prodIndex] = updatedUnitsProd
  return updatedCart;
}