import logo from "../assets/img/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <header className="Header">
      <div className="TopBar">
        <div className="TopBar--center">
          <img className="Logo" src={logo} alt="logo de deliveroo" />
        </div>
      </div>
      <div className="RestaurantInfos">
        <div className="RestaurantInfos--center">
          <div className="RestaurantInfos--texts">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          <img src={data.picture} alt="" className="RestaurantInfos--cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
