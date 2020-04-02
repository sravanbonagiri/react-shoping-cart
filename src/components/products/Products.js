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