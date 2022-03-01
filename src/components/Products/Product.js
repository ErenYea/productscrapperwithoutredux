import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({ item_number, product_title, product_url, image_url, price }) => {
  const url = image_url;
  return (
    <article className="product review custom" >
      <a href={product_url} target="_blank">
        <img src={url || defaultImage} alt={product_title} />
        <h4>{product_title}</h4>
        <p>{price || ""}</p>
      </a>
    </article>
  );
};

Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps={
//   name:'default name',
//   price:3.99,
//   image:defaultImage
// }

export default Product;
