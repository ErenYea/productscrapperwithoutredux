import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import products from "./data";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const ImageSlider = () => {
  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <Carousel {...settings} className="products">
      
      {products.map((product) => {
        return (
          <Wraps key={product.id}>
            <Customred className="product review">
              <img src={product.url} alt="no"/>
            </Customred>
          </Wraps>
        );
      })}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  // display:flex;
  // justify-content: space-between;
  //   border: 2px solid red;
  // height :200px;
  // align-items:center;
  // justify-content: center;
  margin-bottom: 50px;
  padding: 10px;
`;

const Wraps = styled.div`
  display: block;
  // background:grey;
  // display:flex;
  // justify-content: space-between;
  padding: 20px;
  //   border: 2px solid green;
  // height: 200px;
  margin-left: 10px !important;
  margin-right: 10px !important;
`;
const Customred = styled.div`
  height: 100%;
  // border: 1px solid;
  border-radius: 5%;
  cursor: pointer;
  // box-shadow: 10px 10px;
`;



export default ImageSlider;
