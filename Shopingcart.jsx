import { useFormik } from "formik";
import { useContext } from "react";
import { ProductContext } from "../Context/Productcontext";
import { object, string, number } from "yup";

const Shopingcart = () => {
  const { products, cart, searchText, setSearchText,  addToCart, removeFromCart, updateQuantity, totalQuantity,totalCost } = useContext(ProductContext);
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center text-danger">Product List</h1>
        <input  type="text" value={searchText} onChange={handleSearch}placeholder="Search for products..." />
     
        {products.map((list) => (
          <div key={list.id} className="mb-4">
            <h2>{list.title}</h2>
            <p>Price: ${list.price}</p>
         <img  src={list.thumbnail}alt={list.title}className="w-100 h-100"style={{ aspectRatio: "1/1", objectFit: "cover" }}/>
         <button className="btn btn-secondary m-3" onClick={() => addToCart(list)}>Add to Cart</button>
         
          </div>
        ))}
      </div>

      <div className="container m-4">
        <h3>Total Items: {totalQuantity}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>

      <div>
        <h2>Shoping cart</h2>
        {
          cart.map((item)=>(
            <div key={item.id}>
             <h3>{item.title}</h3>  
             <p>Price: ${item.price}</p>
             <p>Quantity: 
              <input type="number" value={item.quantity}onChange={(e) => updateQuantity(item.id, e.target.value)} /> </p>
                
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}> Remove</button>
             
            
          </div>
        ))}
      </div>
      
                
              
           

          {/* ) */}
        {/* } */}
      


      {/* </div> */}

      

          

        </>  
         )   
};

export default Shopingcart;
