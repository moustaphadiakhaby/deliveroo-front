const MenuItem = ({ data }) => {
  return (
    <div className="MenuItem">
      <div className="MenuItem--card">
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
