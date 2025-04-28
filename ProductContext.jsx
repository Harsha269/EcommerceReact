import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState('');


  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const addToCart = (product) => {
    const newCart = [...cart];
    const productExists = newCart.find((item) => item.id === product.id);
    if (productExists) {
      productExists.quantity += 1; 
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };




  const updateQuantity = (id, quantity) => {
    const newCart = [...cart];
    const product = newCart.find((item) => item.id === id);
    if (product) {
      product.quantity = quantity;
    }
    setCart(newCart);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
  const totalCost = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);


  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,cart,searchText,setSearchText,addToCart,removeFromCart,updateQuantity,totalQuantity,totalCost,
        }}>{children}
     </ProductContext.Provider>
  );
};
