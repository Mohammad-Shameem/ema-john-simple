import { faArrowAltCircleRight, faArrowCircleRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    /* with our custom hook */
    const [products, setProducts] = useProducts();   /* amader custom hook ti kono param nicche na tai amra kono param dei nai. */
    /* with react hook */
    /*  const [products, setProducts] = useState([])
     useEffect(() => {
 
         fetch('products.json')
             .then(res => res.json())
             .then(data => setProducts(data))
     }, []); */



    /* with custom hook */
    const [cart, setCart] = useCart(products)


    /* we did the total thing with custom hook  */
    /* const [cart, setCart] = useState([]) */
    /* with recat hook */
    // useEffect(() => {
    //     const storedCart = getStoredCart();  /* ekhane amra ei function ta ke useEffect diye call korar karon holo amra je data gulo chai sei data fulo amader load kore ana hocche utilities er er moddhe getStoredCart function tir maddhome.tai uitilites amader code er bahirer ekta ongsho.mane seta amader main code thake src er vitore kintu amader utilites holo src er bahire tai amra jani code er bahir theke seta jekono bahir thekei hok na kno amader data ante gele useEffect use korte hoy. tai amra ekhane useEffect use kore data gulo amader code e antechi. */
    //     let savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);  //ekhane amra find deyar mane holo find korle amra ki pai ekta array er moddhe find korle amra pai holo oi pura element tai peye jai.ar amader setai dorkar. kintu find,map,forEach korle pai ekta array. ar amra jani find matro ekta jinishe e return kore. tai products er moddhe jar id milbe se shudu takei return korbe.
    //         if (addedProduct) {
    //             const quantity = storedCart[id]  //ekhane id pathalei amara ei object er value ta peye jabo.ar value tai hocche amader quantity. vlao bujhar jonno watch 49.6
    //             addedProduct.quantity = quantity
    //             savedCart.push(addedProduct)
    //         }

    //     }
    //     setCart(savedCart)

    // }, [products])  //ekhane dependency te products deyar mane holo amra kintu prothome data hishebe product guloke anar chesta korchi erpor abar amra nichei abar useEffect diye product er upor ekta karone arrya chalacchi.jehetu useEffect asynchronous ta amader data gulo ashte deri hoy jar fole amra second time je useEffect use kortechi sekhane data gulo undefined dekhay.tai amra deata gulo pawar jonno products er upor dependecy korbo.karon amader products er data guloi lagbe.tai prothom bar reload e undefined holeo hot reload e jokhon amader product data gulo chole asheb tokhon jehetu product change hoiche ar amra amader ekta useEffect hook e products ke dependecy diyeachi tai sei hook ta abar call hobe ebong sei hook e call kora data gulo automatic peye jabe. thats why we use hook. jodi amra dependcy te [] rekhe ditam tahoel se shudhu ekbari call holo products e data gulo ashle ar se call hoto na ebong amader second useEffect e o data ashto na jarfole undefined e thakto.ar e jinsihta valo kore bujhte hole dekhte hobe module 49.6.ar ekhane erporer kajgulo korar jonno amader puro jinishta mane puro product ta lagbe.ar ekhane amra find use kortechi karon id ta sobar unique.same na. amra jani jodi kono array te same element repeated thake tahole condition jar jonno mile se element jodi repeted thake tahole find shudhu ektai dibe.ar gulo ke se dekhbena.tai ekhane id sobar unique ar amader id matching product dorkar tai se jar sathe match kore take return kore dey.

    /* amra ekhane onek kichu kortechi jemon.aamder ei funciton to onClik function ja amader arekta component
     e.to amra ekhan theke prothome props hishebe ei puro function ta ke pathacci jeno oikhan theke ei function 
     ta ke call kora jay.ebong amra oikhan theke function ta ke call korar somoy abar parameter o pathate pari.
     ebong amra sei parameter e pathano data ta ke ekhane recieve o korte pari.amra eta korbo karon amra je
     compnent amader state change korbo seta ekhane ache but jeta click korle state change hobe seta ekhane nai.
     thakleto hoitoi.tarmane amra chaile props hishebe function,kono object data, kono evnet handler o pathate pari.
      */
    const handlAddToCart = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct)
        let newCart = []
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        // console.log(product)
        /* cart.push(product) */ //do not do this 
        /* const newCart = [...cart, selectedProduct]   *///ekhane amra cart namer array ta ke copy kore tarpor sekhane notun arekta elemement add kore notun array banailam.karono react e array immutable mane kono array te sorasori push na korai valo.karon react new kichu paile se notun dom kore agertar sathe compare kore tarpor se change kore tai amra ager array ke change na kore copy kore tarmoddhe ntoun ekta element add kore diye notun array korlam jate react er compre korte subidha hoy.
        setCart(newCart)
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}>
                    <Link to={"/orders"}>
                        <button className='review-button'>Review Order <FontAwesomeIcon className='rightArrow-icon' icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;