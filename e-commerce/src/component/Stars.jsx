import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

export default function Stars({ Stars, reviews }) {
  console.log(Stars);
  const starsNumbers = Array.from({ length: 5 }, (e, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {Stars > number ? (
          <BsStarFill />
        ) : Stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <StarsCont>
      <StarsImgs>{starsNumbers}</StarsImgs>
      <Customers>({<span>{reviews}</span>} customer reviews)</Customers>
    </StarsCont>
  );
}
const StarsImgs = styled.div``;
const StarsCont = styled.div`
  display: flex;
  ${StarsImgs} {
    margin-right: 10px;
    & > span {
      color: rgb(255, 185, 0);
      margin-left: 3px;
      font-size: 17px;
    }
  }
`;
const Customers = styled.div`
  span {
    font-weight: bold;
    color: var(--grey-1);
  }
`;
