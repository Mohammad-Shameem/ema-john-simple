import { useEffect, useState } from "react"
import Product from "../components/Product/Product"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {   /* amra ekhane main products er sathe stored thaka product er id er sathe compare korbo.tai amader ekhane kono products nei tai amra ei fucntion ta ke call korar somoy ei prodcuts ke diye dibo ebong ei prodducts amader dependency te ache amader main function e tai amra etake dependency deyar jonnow kaje lagbe. karon ei products gulo na ashle amra kar sathe comoare korbo.tai dependency na dile products gulo jodi pore ashe tahole error diye dibe.tai amra dependency diye dibo. */
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart();   /* amra ekhane local storage e stored product */
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(Product => Product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]   /* ekhane id dyanmic vabe deya holo.mane amra stored cart e je je item gulo save ache tader key hocche id ebong vlaue hocche quantity. to amra jani bampashe key likhle tar value pawa jay.tai amra kon id er item kotogula ache seta amra quantityte peye jabo. */
                addedProduct.quantity = quantity;  /* ekhane amader added products er moddhe jotogulo products match kore ashbe segulote amra quantity name key te quantity name value set kortechi.mane evabe dot notation diye kora jay. */
                savedCart.push(addedProduct)   /* addedProduct e jotogula object ashbe totogula object ke amra savedCart name er ekta object e rakhtechi. */
            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart]
}
export default useCart;