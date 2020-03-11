import React from 'react';

const Product = ({id, name, description, img, price, addFunc}) => {

    return (
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
            <div className="tc">
                <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                <h1 className="f3 mb2">{name}</h1>
                <h2 className="f5 fw4 gray mt0">{description}</h2>
                <span>$ {price}</span>
                <button className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-green" onClick={() => addFunc({id, name, description, img, price, units: 1})}>Add </button>
            </div>
        </article>
    );
};

export default Product;