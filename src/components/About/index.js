import React from "react";
import styled from "styled-components";
import Review from "./Info";

const About = () => {
  return (
    <main>
      <section className="containers">
        <div className="title">
          <h2>About US</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

const CustomForm = styled.div``;

export default About;
