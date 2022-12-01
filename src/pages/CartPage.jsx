import { useSelector, useDispatch } from "react-redux";import {
  deleteItem,
  incrementQuantity,
  decrementQuantity,
} from "../features/cart/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = () => {
    let price = 0;

    cart.forEach((item) => {
      price += item.price * item.quantity;
    });

    return { price };
  };

  const deleteHandle = (id) => {
    dispatch(deleteItem({ id: id }));
  };

  const incrementHandle = (id) => {
    dispatch(incrementQuantity({ id: id }));
  };

  const decrementHandle = (id) => {
    dispatch(decrementQuantity({ id: id }));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      {cart?.map((crt, index) => {
        return (
          <div>
            <div>
              ID {crt.id}{" "}
              <button onClick={() => deleteHandle(crt.id)}>Delete</button>
            </div>
            <div>{crt.title}</div>
            <div>{crt.brand}</div>
            <div>{crt.price}</div>
            <div>
              {crt.quantity == 1 ? (
                <>
                  {crt.quantity} Item{" "}
                  <button onClick={() => incrementHandle(crt.id)}>+</button>
                </>
              ) : (
                <>
                  <button onClick={() => decrementHandle(crt.id)}> - </button>{" "}
                  {crt.quantity} Items{" "}
                  <button onClick={() => incrementHandle(crt.id)}>+ </button>
                </>
              )}
            </div>
            <br />
          </div>
        );
      })}

      <div>
        Total
        <span> {totalPrice().price}</span>
        <span> ({cart?.length} Items) </span>
      </div>
    </div>
  );
}
