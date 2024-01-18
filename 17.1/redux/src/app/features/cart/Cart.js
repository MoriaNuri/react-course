import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decrementItem } from "./cartSlice";
const Cart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {totalItems > 0 && <div class="counter">{totalItems}</div>}
      <img
        className="cart-icon"
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        alt="cart"
        width="50px"
        height="50px"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`cart ${isOpen && "is-open"}`}>
        {totalItems > 0 ? (
          <>
            <ul>
              {items?.map((item) => (
                <li key={item.id}>
                  {item.name} {item.price} $ quantity:{item.quantity}
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    X
                  </button>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                  <button onClick={() => dispatch(decrementItem(item.id))}>
                    -
                  </button>
                </li>
              ))}
            </ul>
            <p>Total: {`${totalPrice} $`} </p>
          </>
        ) : (
          <p>ARE YOU KIDDING ME? WHY AM I STILL EMPTY</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
