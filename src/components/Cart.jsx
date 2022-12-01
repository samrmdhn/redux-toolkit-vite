import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <h3>Cart</h3>
      <Link to={"/cart"}>
        <a>{cart?.length}</a>
      </Link>
    </div>
  );
}
