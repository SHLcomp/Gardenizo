import { createContext, useState, useEffect } from "react";

export const myCon = createContext(null);

const Provider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  //localStorage
  const saveData = (updatedBasket) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedBasket));
  };
  //get data from localStorage
  useEffect(() => {
    const savedBasket = localStorage.getItem("cartItems");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);
  //add to cart
  const addToCart = (itemId, itemName, itemPrice, itemImage) => {
    const basketCopy = basket;
    let search = basketCopy.find((item) => item.id === itemId);
    let ogPrice = itemPrice;
    if (search === undefined) {
      basketCopy.push({
        id: itemId,
        name: itemName,
        price: ogPrice,
        image: itemImage,
        quantity: 1,
      });
    } else {
      search.quantity += 1;
      search.price = ogPrice * search.quantity;
      alert("Product is already in the cart. Increasing quantity...");
    }
    console.log(basketCopy);
    saveData(basket);
  };

  const myValues = {
    basket,
    addToCart,
  };
  return ( 
  <myCon.Provider value={myValues}>
    {children}
  </myCon.Provider>
  )
};

export default Provider;
