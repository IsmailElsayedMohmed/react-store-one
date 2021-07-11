import React from "react";
import styled from "styled-components";

export default function Discounts() {
  return (
    <Container>
      <Wrapper className="container">
        <div>
          <h1>Join our newsletter and get 20% off</h1>
          <BodyDiscount>
            <Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </p>
            </Title>
            <InputCont>
              <input type="text" placeholder="Enter Email" />
              <button>Subscribe</button>
            </InputCont>
          </BodyDiscount>
        </div>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div``;
const Wrapper = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  h1 {
    color: var(--grey-1);
    font-size: 35px;
    margin: 2rem 0;
    letter-spacing: var(--spacing);
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
const Title = styled.div``;
const InputCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  input {
    width: 60%;
    padding: 0.5rem 1rem;
    border: none;
    font-size: 15px;
    box-shadow: inset 1px 1px 1px var(--grey-7), 1px 1px 1px var(--grey-7);
    outline: none;
  }
  button {
    cursor: pointer;
    padding: 0.54rem 1rem;
    background-color: var(--km7y-7);
    letter-spacing: var(--spacing);
    border: 1px solid var(--grey-7);
    transition: 0.3s;
    &:hover {
      color: white;
    }
  }
`;
const BodyDiscount = styled.div`
  display: grid;
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  ${Title} {
    p {
      font-size: 15px;
      line-height: 1.9;
      letter-spacing: var(--spacing);
      color: var(--grey-4);
    }
  }
`;
