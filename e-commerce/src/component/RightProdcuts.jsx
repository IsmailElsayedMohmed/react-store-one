import React from "react";
import Allprodcuts from "./Allprodcuts";
import HeaderProducts from "./HeaderProducts";
import styled from "styled-components";
export default function LeftCategory() {
  return (
    <Container>
      <HeaderProducts />
      <Allprodcuts />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
