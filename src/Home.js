import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/gateway/VitalProteins/EN/VP_NYNY_H1_Desktop_122120_1x._CB411164289_.jpg" alt="Amazon Hero Banner"/>

                <div className="home__row">
                <Product />
                <Product />
                </div>

                <div className="home__row">
                <Product />
                <Product />
                <Product />
                
                </div>

                <div className="home__row">
                <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;


