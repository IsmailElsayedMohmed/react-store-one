import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
export default function DesingContent() {
  const history = useHistory();
  return (
    <Container className="container">
      <LeftInfo>
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button className="btn" onClick={() => history.push(`/products`)}>
          SHOP NOW
        </button>
      </LeftInfo>
      <RightInfo>
        <ImgContainer>
          <img src="images/hero-bcg-2.jpeg" alt="" />
          <img src="images/hero-bcg.jpeg" alt="" />
        </ImgContainer>
      </RightInfo>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  @media (min-width: 951px) {
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 4rem);
    gap: 8rem;
  }
`;

const LeftInfo = styled.div`
  h1 {
    font-size: 50px;
    letter-spacing: var(--spacing);
    color: var(--grey-1);
    text-shadow: 5px 1px var(--grey-9);
    line-height: 1.1;
    margin: 25px 0;
    max-width: 350px;
    @media (max-width: 951px) {
      font-size: 40px;
    }
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--grey-5);
    font-size: 1rem;
    @media (min-width: 951px) {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .btn {
      font-size: 15px;
      padding: 0.6rem 0.75rem;
    }
  }
`;
const RightInfo = styled.div`
  @media (max-width: 951px) {
    display: none;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  &:before {
    position: absolute;
    top: 20%;
    left: -40px;
    content: "";
    width: 300px;
    border-radius: var(--radius);
    height: 300px;
    background-color: var(--km7y-9);
  }
  img:nth-child(1) {
    position: absolute;
    bottom: 0;
    left: -70px;
    z-index: 1;
    width: 250px;
    border-radius: var(--radius);
    height: 150px;
  }
  img:nth-child(2) {
    width: 100%;
    height: 550px;
    position: relative;
    border-radius: var(--radius);
    display: block;
    object-fit: cover;
  }
`;
