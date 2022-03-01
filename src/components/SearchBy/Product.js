import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";
import styled from 'styled-components'

const Product = ({ item_number, product_title, product_url, image_url, price , searchby}) => {
  const url = image_url;
  return (
    <article className="product review custom" >
      <CustomDiv onClick={()=>searchby(product_title)}>
        <img src={url || defaultImage} alt={product_title} />
        <h4>{product_title}</h4>
        <p>{price || ""}</p>
      </CustomDiv>
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

const CustomDiv = styled.div`
  
  
`

export default Product;