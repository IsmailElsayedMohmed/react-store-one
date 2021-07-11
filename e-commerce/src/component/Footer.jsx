import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Wrapper>
      © 2021 <span>ComfySloth</span> All rights reserved
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  padding: 2rem 0;
  align-items: center;
  letter-spacing: var(--spacing);
  background-color: var(--black);
  font-size: 15px;
  span {
    color: var(--km7y-5);
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    & {
      font-size: 15px;
    }
  }
  @media (max-width: 468px) {
    & {
      font-size: 12px;
    }
  }
`;
