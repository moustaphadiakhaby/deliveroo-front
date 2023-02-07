import MenuItem from "./MenuItem";

const MenuItems = ({ data, setCart, cart }) => {
  return (
    <div className="MenuItems">
      <h2>{data.meals.length > 0 && data.name}</h2>
      <div className="MenuItems--items">
        {data.meals.map((elem, index) => {
          return (
            <MenuItem key={index} data={elem} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    </div>
  );
};
export default MenuItems;
