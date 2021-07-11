import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ShowSideBar({ showSlider, changeSlider }) {
  return (
    <Container showSlider={showSlider}>
      <HeaderSideBar>
        <Logo>
          <img src="/images/logo.svg" alt="" />{" "}
        </Logo>
        <Cancel>
          <img
            src="/images/cancel.svg"
            alt=""
            onClick={() => changeSlider("close")}
          />
        </Cancel>
      </HeaderSideBar>
      <NavSideBar onClick={() => changeSlider("close")}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Product</Link>
      </NavSideBar>
      <NavFooter>
        <Cart>
          Cart
          <img src="/images/cart.svg" alt="" />
          <Add>21</Add>
        </Cart>
        <Login>
          Login
          <img src="/images/profile.svg" alt="" />
        </Login>
      </NavFooter>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  overflow: none;
  transition: var(--transition);
  z-index: 11213;
  top: 0;
  left: ${({ showSlider }) => (showSlider === "open" ? "0%" : "-100%")};
  bottom: 0;
  right: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media (min-width: 961px) {
    display: none;
  }
`;
const Logo = styled.div``;
const Cancel = styled.div``;
const HeaderSideBar = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  ${Logo} {
    img {
      width: 150px;
      height: 100px;
    }
  }
  ${Cancel} {
    &:hover {
      img {
        opacity: 0.4;
        transition: var(--transition);
      }
    }
    img {
      width: 25px;
      cursor: pointer;
      height: 25px;
      margin-right: 2rem;
    }
  }
`;
const NavSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  a {
    display: inline-block;
    padding: 1rem 1.6rem;
    transition: var(--transition);
    color: var(--grey-1);
    letter-spacing: var(--spacing);
    &:hover {
      background-color: var(--grey-10);
      padding-left: 2rem;
    }
  }
`;
const Cart = styled.div``;
const Login = styled(Cart)``;
const Add = styled.div``;
const NavFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 25px;
  ${Cart} {
    display: flex;
    margin-left: 2rem;
    justify-content: center;
    cursor: pointer;
    position: relative;
    align-items: center;
    letter-spacing: var(--spacing);
    img {
      width: 25px;
      height: 25px;
      margin-left: 5px;
    }
    ${Add} {
      position: absolute;
      font-size: 12px;
      color: white;
      top: -5px;
      letter-spacing: initial;
      left: 70px;
      padding: 0.2rem;
      border-radius: 50%;
      background-color: var(--km7y-5);
    }
  }
`;
export default ShowSideBar;
