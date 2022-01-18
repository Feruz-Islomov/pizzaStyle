import React from "react";

const MenuBodyCards = (props) => {
  const { products } = props;
  return (
    <>
      {products ? (
        <div className="menubody">
          {products.pizza.map((product, key) => {
            return (
              <div id="pizza" className="menucard pizza" key={key}>
                <div className="carditems">
                  <div className="name">{product.name}</div>
                  <img className="meimg" src={product.img} alt={product.name} />
                  <p>{product.comment}</p>
                </div>
                <h4 className="price">
                  <i>
                    small: {product.sprice} so'm <br />
                    medium: {product.mprice} so'm <br />
                    large: {product.lprice} so'm
                  </i>
                </h4>
              </div>
            );
          })}

          {/* <!-- burger cards --> */}
          {products.burger.map((product, key) => {
            return (
              <div id="burger" className="menucard burger" key={key}>
                <div className="carditems">
                  <div className="name">{product.name}</div>
                  <img className="meimg" src={product.img} alt={product.name} />
                  <p>{product.comment}</p>
                </div>
                <h4 className="price">
                  <i>
                    {product.price} so'm <br /> (cheese +{product.eprice})
                  </i>
                </h4>
              </div>
            );
          })}

          {/* <!-- sauce card  --> */}
          {products.sauce.map((product, key) => {
            return (
              <div id="sauce" className="menucard sauce" key={key}>
                <div className="carditems">
                  <div className="name">{product.name}</div>
                  <img className="meimg" src={product.img} alt={product.name} />
                  <p>{product.comment}</p>
                </div>
                <h4 className="price">
                  <i>{product.price} so'm</i>
                </h4>
              </div>
            );
          })}

          {/* <!-- dessert card  --> */}
          {products.dessert.map((product, key) => {
            return (
              <div id="dessert" className="menucard dessert" key={key}>
                <div className="carditems">
                  <div className="name">{product.name}</div>
                  <img className="meimg" src={product.img} alt={product.name} />
                  <p>{product.comment}</p>
                </div>
                <h4 className="price">
                  <i>{product.price} so'm</i>
                </h4>
              </div>
            );
          })}

          {/* <!-- drink card  --> */}
          {products.drink.map((product, key) => {
            return (
              <div id="drink" className="menucard drink" key={key}>
                <div className="carditems">
                  <div className="name">{product.name}</div>
                  <img className="meimg" src={product.img} alt={product.name} />
                  <p>{product.comment}</p>
                </div>
                <h4 className="price">
                  <i>{product.price} so'm</i>
                </h4>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MenuBodyCards;
