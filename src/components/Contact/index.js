import React, { useState } from "react";
import styled from "styled-components";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const Contact = ({ img }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const getMessage = () => {
    console.log(email, text);
  };

  return (
    <CustomDiv img={img}>
      <AnotherDiv className="review">
        <CustomHeading>Contact Us</CustomHeading>
        <Wrap>
          <FormControl>
            <InputLabel htmlFor="my-email">Email address</InputLabel>
            <Input
              id="my-email"
              aria-describedby="my-helper-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </Wrap>

        <Wrap>
          <AnotherWrap>
            <FormControl>
              <InputLabel htmlFor="my-message">Message</InputLabel>
              <Input
                id="my-message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                
                multiline
                
              />
            </FormControl>
            
          </AnotherWrap>
        </Wrap>
        <Wrap>
          <Button
            variant="contained"
            onClick={getMessage}
            size="medium"
            color="primary"
          >
            Submit
          </Button>
        </Wrap>
      </AnotherDiv>
    </CustomDiv>
  );
};



const CustomDiv = styled.div`
  margin-top: 60px;
  //   border: 2px solid red;
  align-items: center;
  // background-image: ${(props) => `url('/images/${props.img}')`};
  // background-size: cover;
  // background-position: center;
  // backgroung-repeat: no-repeat;
  justify-content: center;
  display: flex;
  height: 697px;
  //   background: grey;
`;

const CustomHeading = styled.h1`
  font-weight: 300;
  margin-bottom: 50px;
`;

const AnotherDiv = styled.div`
  // border: 1px solid black;
  width: 500px;
  height: 500px;
  // background: white;
  // border-radius: 5%;
  // box-shadow: 5px 10px;

  //   transform: scale(.9);
`;

const Wrap = styled.div`
  padding: 20px;
`;

const AnotherWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default Contact;
