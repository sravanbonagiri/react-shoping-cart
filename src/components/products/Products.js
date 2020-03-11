import Product from "../Product"
import React, { Component } from 'react';

class Products extends React.PureComponent {

    state = {
      cart: [
        {
        id: 1,
        name: "Prod A1",
        description: "This is a new product",
        img: "http://tachyons.io/img/avatar_1.jpg",
        price: 20,
        units: 3
        }
      ]
    };

    findProductIndex =(cart, productId) => {
        return cart.findIndex(p => p.id === productId);
      };
    
      updateProductUnits(cart, product) {
        const prodIndex = this.findProductIndex(cart, product.id);
        const updatedrods = [...cart];
        const existingProd = updatedrods[prodIndex]
        const updatedUnitsProd = {
          ...existingProd,
          units: existingProd.units + product.units
        };
    
        updatedrods[prodIndex] = updatedUnitsProd
        return updatedrods;
      }

    addToCart(product){
      this.props.addToCartAction(product)
    }

    render() {
        const {products} = this.props;
        return <div className="pa3 pa5-na flex justify-around flex-wrap ">
            {products.map(p => <Product key={p.id} {...p} 
                addFunc={(product) => this.addToCart(product)} /> )
        }
        </div>
    }
}


export default Products; 