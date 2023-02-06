import MenuItem from "./MenuItem";

const MenuItems = ({ data }) => {
  return (
    <div className="MenuItems">
      <h2>{data.meals.length > 0 && data.name}</h2>
      <div className="MenuItems--items">
        {data.meals.map((elem, index) => {
          return <MenuItem key={index} data={elem} />;
        })}
      </div>
    </div>
  );
};
export default MenuItems;
