import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([])
    /* amra ekhane onek kichu kortechi jemon.aamder ei funciton to onClik function ja amader arekta component
     e.to amra ekhan theke prothome props hishebe ei puro function ta ke pathacci jeno oikhan theke ei function 
     ta ke call kora jay.ebong amra oikhan theke function ta ke call korar somoy abar parameter o pathate pari.
     ebong amra sei parameter e pathano data ta ke ekhane recieve o korte pari.amra eta korbo karon amra je
     compnent amader state change korbo seta ekhane ache but jeta click korle state change hobe seta ekhane nai.
     thakleto hoitoi.tarmane amra chaile props hishebe function,kono object data, kono evnet handler o pathate pari.
      */
    const handlAddToCart = (product) => {
        console.log(product)
        /* cart.push(product) */ //do not do this 
        const newCart = [...cart, product]  //ekhane amra cart namer array ta ke copy kore tarpor sekhane notun arekta elemement add kore notun array banailam.karono react e array immutable mane kono array te sorasori push na korai valo.karon react new kichu paile se notun dom kore agertar sathe compare kore tarpor se change kore tai amra ager array ke change na kore copy kore tarmoddhe ntoun ekta element add kore diye notun array korlam jate react er compre korte subidha hoy.
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-cotainer">
                <div className='product-parent'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handlAddToCart={handlAddToCart}//amra ekhane spread operator use korechi.  //ekhane amra props er moddhe ei pura function ta kei pathacchi.
                        ></Product>)
                    }
                </div>

            </div>
            <div className="cart-parent">  {/* eta jehetu amader cart tai sobkichu ekhane dileo cholbe but eta onek jaygay kaje lagbe tai amra etake alada jayagay korar chesta korbo. mane onno ekta component e . */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;