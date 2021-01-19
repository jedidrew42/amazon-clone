import React from "react";
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>180 Recovery Guide</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                   
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/71a4CujgYyL.SR160,240_BG243,243,243.jpg" alt="180 recovery guide"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
