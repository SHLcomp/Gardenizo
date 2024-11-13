import { useContext } from "react";
import { myCon } from "../../context/Context";
import './Product.scss';

const Product = (item) => {
  const {addToCart} = useContext(myCon);
  return (
    <div className="item">
      <img src={item.image} alt="" />
      <h1>
        <a href="#" className="a">
          {item.name}
        </a>
      </h1>
      <p className="des">
        {item.des}
      </p>
      <p>{item.price}$</p>

      <div className="grouping_ctas center">
        <span className="material-symbols-outlined fav_btn">favorite</span>
        <button
          className="buy_btn"
          onClick={() => addToCart(item.id, item.name, item.price, item.image)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
