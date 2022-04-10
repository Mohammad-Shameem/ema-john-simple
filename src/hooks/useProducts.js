import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return [products, setProducts];   /* function theke ekeadhik jinish return korte hole setguloke ekta array er moddhe rakhte hobe. */
};
export default useProducts;