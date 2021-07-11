import React, { useEffect, useState, useRef } from "react";
import { IoMdTrash } from "react-icons/io";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import FinalResult from "./FinalResult";
import { delteTheCart, getTheBoughCart, mainCalc } from "../reducers/index";
import PriceUtilit from "./PriceUtilit";

export default function ContentCart() {
  const dispatch = useDispatch();
  const Bought = useSelector((state) => state.inital.boughtCart);
  const [value, setValue] = useState(Bought);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Bought));
    setValue(Bought);
  }, [Bought]);
  const allNumber = value.reduce((acumlator, inital) => {
    return acumlator + inital.calc;
  }, 0);
  const allNumberweq = value.reduce((acumlator, inital) => {
    return acumlator + inital.price * inital.calc;
  }, 0);
  const feePRice = value.filter((inital) => {
    return inital.shipping !== true;
  });

  return (
    <>
      <Wrapper>
        <Info>
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </Info>
        {value.map(
          ({
            category,
            colors,
            company,
            description,
            images,
            name,
            price,
            id,
            calc,
            color,
            stars,
            reviews,
            shipping,
            stock,
          }) => {
            return (
              <RowInfo key={id}>
                <ImgsHeader>
                  <div>
                    <img src={images[0].url} alt={name} />
                  </div>
                  <div>
                    <h1>{name}</h1>
                    <p>
                      Color :<Background color={color}></Background>
                    </p>
                  </div>
                </ImgsHeader>
                <Price>{PriceUtilit(price)}</Price>
                <Calc>
                  <button
                    onClick={(e) => {
                      if (calc === 1) return dispatch(delteTheCart(id));
                      dispatch(mainCalc(id, calc, "minus", stock));
                    }}
                  >
                    -
                  </button>
                  <p>{calc} </p>
                  <button
                    onClick={(e) => dispatch(mainCalc(id, calc, "plus", stock))}
                  >
                    +
                  </button>
                </Calc>
                <SubTotal>{PriceUtilit(price * calc)}</SubTotal>
                <Trash onClick={() => dispatch(delteTheCart(id))}>
                  <a>
                    <IoMdTrash />
                  </a>
                </Trash>
              </RowInfo>
            );
          }
        )}
      </Wrapper>
      <TwoButtons>
        <button className="finalButton">Continue Shopping</button>
        <button className="finalButton black">Clear Shopping Cart</button>
      </TwoButtons>
      <FinalResult allNumberweq={allNumberweq} feePRice={feePRice} />
    </>
  );
}
const Info = styled.div``;
const RowInfo = styled.div``;
const ImgsHeader = styled.div``;
const Price = styled.div``;
const Calc = styled.div``;
const Trash = styled(Price)``;
const SubTotal = styled(Price)``;
const Wrapper = styled.div`
  & > div:last-of-type {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--grey-7);
  }
  & > div:nth-of-type(2) {
    padding-top: 2rem;
  }

  ${Info} {
    display: grid;
    color: var(--grey-5);
    letter-spacing: var(--spacing);
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
    padding: 2rem 0;
    border-bottom: 1px solid var(--grey-7);
    margin-bottom: 1rem;
    @media (max-width: 761px) {
      display: none;
    }
    & > div:first-child {
      text-align: center;
    }
  }
  ${RowInfo} {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
    margin-bottom: 2rem;
    @media (max-width: 761px) {
      display: flex;
      justify-content: space-between;
      & > div:nth-child(2),
      & > div:nth-child(4) {
        display: none;
      }
      h1 {
        font-size: 15px;
      }
    }
    @media (max-width: 431px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-bottom: 1px solid var(--grey-7);
      padding-bottom: 10px;
      gap: 20px;
    }
    ${ImgsHeader} {
      display: flex;
      display: flex;
      justify-items: center;
      align-items: center;
      font-size: 12px;
      gap: 5px;
      & > div:nth-of-type(2) {
        margin-left: 10px;
        letter-spacing: var(--spacing);
        display: flex;
        justify-items: center;
        flex-direction: column;
        line-height: 2;
        font-size: 15px;
        h1 {
        }
      }
      img {
        width: 125px;
        height: 75px;
        border-radius: 4px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
      }
    }
    ${Price} {
      display: flex;
      justify-items: center;
      align-items: center;
      font-size: 15px;
      letter-spacing: var(--spacing);
      color: var(--km7y-5);
    }
    ${Calc} {
      color: var(--grey-1);
      font-size: 25px;
      display: flex;
      justify-items: center;
      align-items: center;
      button {
        background-color: transparent;
        border: transparent;
        font-size: 30px;
        cursor: pointer;
      }
    }
    ${Trash} {
      a {
        display: flex;
        color: white;
        font-size: 20px;
        padding: 3px;
        background-color: #c92901;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
const Background = styled.a`
  background-color: ${({ color }) => (color ? color : "white")};
  border-radius: 30%;
  display: inline-flex;
  margin: 10px 7px 0;
  line-height: 2;
  width: 12px;
  height: 12px;
`;
const TwoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & > button.finalButton {
    padding: 5px 15px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    background-color: var(--km7y-4);
    border-radius: 5px;
    color: white;
    margin-bottom: 50px;
  }
  & > button.black {
    background-color: black;
  }
  @media (max-width: 461px) {
    display: flex;
    flex-direction: column;
    & > button.finalButton {
      margin-bottom: 20px;
    }
  }
`;
