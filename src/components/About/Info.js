import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useFetch } from "../customhook/2-useFetch";

const Review = () => {
  const [index, setindex] = useState(0);
  const [back, setback] = useState(false);
  const [next, setnext] = useState(true);

  const { loading, products } = useFetch("http://localhost:3001/about");
  useEffect(() => {
      if (index === 0) {
        setback(false);
        setnext(true);
      } else if (index === products.reviews.length - 1) {
        setnext(false);
        setback(true);
      } else {
        setback(true);
        setnext(true);
      }
  }, [index]);
  console.log(products);
  if (loading) {
    return <div className="container">Loading ...</div>;
  } else {
    const { id, name, job, text, image } = products.reviews[index];
    
    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button
            className="prev-btn"
            onClick={() => {
              setindex(index - 1);
            }}
            style={back ? { display: "inline-block" } : { display: "none" }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => {
              setindex(index + 1);
            }}
            style={next ? { display: "inline-block" } : { display: "none" }}
          >
            <FaChevronRight />
          </button>
        </div>
      </article>
    );
  }
};

export default Review;
