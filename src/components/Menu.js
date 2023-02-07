import MenuItems from "./MenuItems";

const Menu = ({ data, cart, setCart }) => {
  return (
    <div className="Menu">
      {data.map((elem, index) => {
        return (
          <MenuItems key={index} data={elem} cart={cart} setCart={setCart} />
        );
      })}
    </div>
  );
};
export default Menu;
