import Menu from "./Menu";
import Cart from "./Cart";
import { useState } from "react";

const Content = ({ data }) => {
  const [cart, setCart] = useState([]);

  return (
    <div className="Content">
      <div className="Content--center">
        <Menu data={data} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};
export default Content;
