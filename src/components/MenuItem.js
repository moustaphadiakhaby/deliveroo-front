const MenuItem = ({ data, setCart, cart }) => {
  return (
    <div className="MenuItem">
      <div
        className="MenuItem--card"
        onClick={() => {
          const result = cart.findIndex((item) => item.title === data.title);
          const result2 = cart.find((item) => item.title === data.title);

          if (result2) {
            const copyCart = [...cart];
            copyCart[result].price += Number(data.price);
            copyCart[result].quantity += 1;
            setCart(copyCart);
          } else {
            const copyCart = [...cart];
            copyCart.push({
              title: data.title,
              price: Number(data.price),
              initPrice: data.price,
              quantity: 1,
            });
            setCart(copyCart);
          }
        }}
      >
        <div className="MenuItem--texts">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="MenuItem--infos">
            <span className="MenuItem--price">{data.price} €</span>
            {data.popular && (
              <span className="MenuItem--popular">
                <i className="icon-STAR_FILL"></i>
                Populaire
              </span>
            )}
          </div>
        </div>
        {data.picture && (
          <div className="MenuItem--picture">
            <img src={data.picture} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
