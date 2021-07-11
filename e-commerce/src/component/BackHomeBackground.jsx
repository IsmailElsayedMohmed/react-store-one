import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BackHomeBackground({ state, name }) {
  return (
    <Background>
      <div>
        <Link to="/">Home / </Link>{" "}
        {!name ? (
          <span>{state}</span>
        ) : (
          <Link to="/products">{state + "/"}</Link>
        )}
        {name && <span>{name}</span>}
      </div>
    </Background>
  );
}
const Background = styled.div`
  background-color: var(--km7y-10);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 150px;
  font-size: 32px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 1rem;
  @media (max-width: 761px) {
    font-size: 20px;
  }
  div {
    margin: auto;
    width: 90vw;
    max-width: var(--max-width);
    a {
      &:hover {
        color: var(--km7y-1);
      }
      transition: 0.3s;
      color: var(--km7y-4);
    }
  }
  a {
    color: var(--km7y-1);
  }
`;
