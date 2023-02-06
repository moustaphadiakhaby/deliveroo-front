import Menu from "./Menu";
import Cart from "./Cart";

const Content = ({ data }) => {
  return (
    <div className="Content">
      <div className="Content--center">
        <Menu data={data} />
        <Cart />
      </div>
    </div>
  );
};
export default Content;
