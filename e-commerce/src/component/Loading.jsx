import React from "react";
import styled from "styled-components";

export default function Loading({ nameState }) {
  return <Wrapper>{nameState ? nameState : "Loading...."}</Wrapper>;
}
const Wrapper = styled.div`
  text-align: center;
  font-size: 55px;
  font-weight: bold;
  color: var(--grey-1);
  box-shadow: 1px 1px solid red;
  margin: 4rem 0;
  letter-spacing: var(--spacing);
  @media (max-width: 761px) {
    font-size: 20px;
  }
`;
