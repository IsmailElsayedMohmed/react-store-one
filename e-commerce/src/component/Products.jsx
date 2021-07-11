import React from "react";
import BackHomeBackground from "./BackHomeBackground";
import styled from "styled-components";
import RightProdcuts from "./RightProdcuts";
import LeftCategory from "./LeftCategory";

export default function Products() {
  return (
    <>
      <BackHomeBackground state={"Products"} />
      <Container className="container">
        <LeftCategory />
        <RightProdcuts />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  gap: 50px;
  padding-top: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 12fr;
  }
`;
