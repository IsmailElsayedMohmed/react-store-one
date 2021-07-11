import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onSignIn } from "../reducers";
import newPrice from "./PriceUtilit";

export default function FinalResult({ allNumberweq, feePRice }) {
  const dispatch = useDispatch();
  const Bought = useSelector((state) => state.inital.boughtCart);
  const user = useSelector((state) => state.inital.user);
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <div>
        <MainCont>
          <Content>
            <Subtotal>
              <h3>Subtotal :</h3>
              <p>{newPrice(allNumberweq)}</p>
            </Subtotal>
            <Shipping>
              <h5>Shipping Fee:</h5>
              <p>${feePRice.length * 5.34}</p>
            </Shipping>
            <ShippingTotal>
              <h1>Order Total :</h1>
              <p>{newPrice(allNumberweq + feePRice.length * 5.34)}</p>
            </ShippingTotal>
          </Content>
        </MainCont>
        <Button onClick={() => dispatch(onSignIn())}>
          {!user ? "LOGIN" : "Procced to the checkout"}
        </Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;
const MainCont = styled.div``;
const Subtotal = styled.div``;
const Shipping = styled(Subtotal)``;
const ShippingTotal = styled(Subtotal)``;
const Content = styled.div`
  border: 1px solid var(--grey-7);
  padding: 30px 50px 20px;
  border-radius: 5px;
  letter-spacing: var(--spacing);
  color: var(--grey-2);
  h3 {
    font-size: 20px;
    white-space: nowrap;
    font-weight: bold;
  }
  h5 {
    font-size: 15px;
    font-weight: 300;
    white-space: nowrap;
  }
  h1 {
    font-size: 30px;
    color: var(--grey-1);
    font-weight: bold;
    white-space: nowrap;
  }
  @media (max-width: 761px) {
    h1,
    h5,
    h3,
    p {
      font-size: 17px;
    }
  }
  @media (max-width: 461px) {
    h1,
    h5,
    h3,
    p {
      font-size: 13px;
    }
  }
  ${Subtotal} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    padding: 0.5rem 0;
    p {
      font-weight: bold;
    }
  }
  ${Shipping} {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--grey-5);
    p {
      color: var(--grey-1);
      font-weight: 400;
    }
  }
  ${ShippingTotal} {
    p {
      color: var(--grey-1);
      font-size: 20px;
      @media (max-width: 761px) {
        & {
          font-size: 15px;
        }
      }
    }
    margin-top: 20px;
  }
`;
const Button = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  padding: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.6), inset 0 0 0 3px rgba(0, 0, 0, 0.1);
  background-color: var(--km7y-5);
  color: white;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    color: var(--km7y-1);
    background-color: var(--km7y-7);
  }
`;
