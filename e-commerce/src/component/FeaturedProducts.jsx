import React, { useEffect, useState } from "react";
import PriceUtilit from "./PriceUtilit";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
export default function FeaturedProducts() {
  const history = useHistory();
  const products = useSelector((state) => state.inital.Products);
  const product = products.filter((e, index) => {
    const nameProdcut = [
      "Entertainment Center",
      "High-Back Bench",
      "Modern Bookshelf",
    ];
    if (e.name.toLowerCase() === nameProdcut[0].toLowerCase()) {
      return e;
    }
    if (e.name.toLowerCase() === nameProdcut[1].toLowerCase()) {
      return e;
    }
    if (e.name.toLowerCase() === nameProdcut[2].toLowerCase()) {
      return e;
    }
  });
  return (
    <Container>
      <FeaturedTitle>
        <h1>Featured Products</h1>
        <div className="underLine"></div>
      </FeaturedTitle>
      <SectionGridCenter className="container">
        {product &&
          product.map(({ id, image, name, price }) => {
            return (
              <article key={id}>
                <ImageCont>
                  <img src={image} alt={name} />
                  <BlackCovergeWithImage>
                    <img
                      src="/images/searchIcon.svg"
                      alt=""
                      onClick={() => history.push(`/products/${id}`)}
                    />
                  </BlackCovergeWithImage>
                </ImageCont>
                <ImageFooter>
                  <h5>{name}</h5>
                  <p>{PriceUtilit(price)}</p>
                </ImageFooter>
              </article>
            );
          })}
      </SectionGridCenter>
      <div>
        <button className="btn" onClick={() => history.push(`/products`)}>
          All Proucts
        </button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  padding: 4rem 0;
  background-color: var(--grey-10);
  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 0.5rem 0.75rem;
      font-size: 14px;
    }
  }
`;
export const FeaturedTitle = styled.div`
  h1 {
    letter-spacing: var(--spacing);
    color: var(--grey-1);
    text-align: center;
    font-size: 2.5rem;
  }
  .underLine {
    margin: auto;
    width: 6rem;
    height: 0.25rem;
    background-color: var(--km7y-5);
  }
`;
const ImageCont = styled.div``;
const BlackCovergeWithImage = styled.div``;
const SectionGridCenter = styled.div`
  padding: 4rem 0;
  display: grid;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
  img {
    width: 100%;
    height: 225px;
    object-fit: cover;
  }
  ${ImageCont} {
    position: relative;
    background-color: transparent;
    ${BlackCovergeWithImage} {
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        cursor: pointer;
        transition: 0.4s;
      }
    }
    &:hover > ${BlackCovergeWithImage} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      & img {
        display: block;
        width: 25px;
        height: 25px;
        padding: 0.5rem;
        background-color: var(--grey-4);
        border-radius: 50%;
      }
    }
  }
`;
const ImageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: var(--spacing);
  h5 {
    color: var(--grey-1);
    font-size: 15px;
    font-weight: 400;
  }
  p {
    color: var(--km7y-5);
  }
  margin-top: 20px;
`;
