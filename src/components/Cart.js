const Cart = ({ cart, setCart }) => {
  let total = 0;
  return (
    <div className="Cart">
      <div className="Cart--card">
        <button
          className={cart.length > 0 ? "Cart--validate" : "Cart--disabled"}
        >
          Valider mon panier
        </button>
        {cart.length > 0 ? (
          <div className="Cart-minus-cart-container">
            <div className="Cart--items">
              {cart.map((elem, index) => {
                total += Number(elem.price);
                const basePrice = Number(elem.initPrice);
                return (
                  <div key={index} className="Cart--line">
                    <div className="Cart--counter">
                      <i
                        className="icon-minus"
                        onClick={() => {
                          if (elem.quantity > 1) {
                            const copyCart = [...cart];
                            copyCart[index].price -= basePrice;
                            copyCart[index].quantity -= 1;
                            setCart(copyCart);
                          } else {
                            const copyCart = [...cart];
                            copyCart.splice(index, 1);
                            setCart(copyCart);
                          }
                        }}
                      ></i>
                      <span>{elem.quantity}</span>
                      <i
                        className="icon-plus"
                        onClick={() => {
                          const copyCart = [...cart];
                          copyCart[index].price += basePrice;
                          copyCart[index].quantity += 1;
                          setCart(copyCart);
                        }}
                      ></i>
                    </div>
                    <span className="Cart--item-name">{elem.title}</span>
                    <span className="Cart--amount">
                      {elem.price.toFixed(2)} €
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="Cart--results">
              <div className="Cart--result-line">
                <span className="Cart--result-name">Sous-total</span>
                <span className="Cart--amount">{total.toFixed(2)} €</span>
              </div>
              <div className="Cart--result-line">
                <span className="Cart--result-name">Frais de livraison</span>
                <span>2.50 €</span>
              </div>
            </div>
            <div className="Cart--total">
              <span className="Cart--result-name">Total</span>
              <span className="Cart--amount">{(total + 2.5).toFixed(2)} €</span>
            </div>
          </div>
        ) : (
          <div className="Cart--empty">Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
