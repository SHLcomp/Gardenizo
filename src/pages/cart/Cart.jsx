import { myCon } from "../../context/Context"; 
import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Cart.scss';
const Cart = () => {
  const {basket} = useContext(myCon);

  return (
    <div>
      <Navbar />
      <div className='cart'>
      {basket.map((item) => {
        return (
          <div key={item.id} className="items-con">
            {/* items */}
            <div className="item">
            <img src={item.image} alt={item.name} />
              <h3 className="item-name">{item.name}</h3>
              <h4 className="price">${item.price}</h4>
              <div className="quantity">
              <h6>-</h6>
              <h5>{item.quantity}</h5>
              <h6>+</h6>
              </div>
              <button className="remove-btn"><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        );
      })}
      <div className="checkout">
        <div className="total-price-detail">
          <h3>Total Price: <span>$300</span></h3>
          <button className="checkout-btn" onClick={()=> alert("Checkout")} >Checkout</button>
        </div>
      </div>

      
    </div>
    <Footer />
    </div>
  )
}

export default Cart
