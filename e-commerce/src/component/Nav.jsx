import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onSignIn, onSignOut } from "../reducers";
import { BsFillPersonCheckFill } from "react-icons/bs";
export default function Nav({ changeSlider }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.inital.user);
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="/images/logo.svg" alt="comfy-sloth" />
        </Link>
      </Logo>
      <ContNav>
        <NavLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </NavLinks>
        <CartLoginCont>
          <Cart>
            Cart
            <img src="/images/cart.svg" alt="" />
            <Add>21</Add>
          </Cart>
          {!user ? (
            <Login onClick={() => dispatch(onSignIn())}>
              Login
              <img src="/images/profile.svg" alt="" />
            </Login>
          ) : (
            <Login onClick={() => dispatch(onSignOut())}>
              Logout
              <BsFillPersonCheckFill />
            </Login>
          )}
        </CartLoginCont>
      </ContNav>
      <NavBarToggle>
        <img
          src="/images/navBarToggle.svg"
          alt=""
          onClick={() => changeSlider("open")}
        />
      </NavBarToggle>
    </Container>
  );
}

const Container = styled.nav`
  width: 90vw;
  max-width: var(--max-width);
  margin: auto;
  display: grid;
  padding: 1rem 0;
  grid-template-columns: 8fr 14fr;
  @media (max-width: 768px) {
    grid-template-columns: 7fr 1fr;
  }
`;
const Logo = styled.div`
  & img {
    width: 175px;
  }
`;
const NavLinks = styled.ul``;
const ContNav = styled.div`
  display: flex;
  justify-content: space-between;
  ${NavLinks} {
    display: flex;
    justify-content: center;

    align-items: center;
    li {
      font-size: 15px;
      cursor: pointer;
      letter-spacing: var(--spacing);
      border-bottom: 2px solid transparent;

      &:hover a {
        border-bottom: 2px solid var(--km7y-7);
      }
      & a {
        color: var(--km7y-1);
        padding: 0.5rem 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Cart = styled.a``;
const Add = styled.span``;
const Login = styled(Cart)``;
const CartLoginCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Cart} {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 1.5rem;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    position: relative;
    ${Add} {
      position: absolute;
      top: -8px;
      left: 70px;
      background-color: var(--km7y-5);
      padding: 0.3rem;
      border-radius: 50%;
      height: 10px;
      font-size: 12px;
      color: white;
      width: 10px;
      display: flex;
      letter-spacing: 0;
      justify-content: center;
      align-items: center;
    }
    img {
      margin-left: 5px;
      width: 25px;
      height: 25px;
    }
  }
`;
const NavBarToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }
`;
