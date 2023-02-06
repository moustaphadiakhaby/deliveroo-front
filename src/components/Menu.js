import MenuItems from "./MenuItems";

const Menu = ({ data }) => {
  return (
    <div className="Menu">
      {data.map((elem, index) => {
        return <MenuItems key={index} data={elem} />;
      })}
    </div>
  );
};
export default Menu;
