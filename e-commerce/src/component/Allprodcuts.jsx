import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import newPrice from "./PriceUtilit";
import Loading from "./Loading";
export default function Allprodcuts() {
  const fetchProdcuts = useSelector((state) => state.inital.filterCategory);
  const history = useHistory();
  const change = useSelector((state) => state.inital.changeTheme);
  const [allProdcuts, setAllProdcuts] = useState([""]);
  useEffect(() => {
    setAllProdcuts(fetchProdcuts);
  }, [fetchProdcuts]);
  return (
    <Container>
      <SectionGridCenter className={(change && "the-other-theme") || undefined}>
        {allProdcuts.length === 0 ? (
          <Loading nameState={"Wait or there is no prodcuts"} />
        ) : (
          allProdcuts.map(
            ({
              category,
              colors,
              company,
              description,
              id,
              image,
              name,
              price,
              shipping,
            }) => {
              return (
                <article
                  key={id || "unKnown"}
                  className={(change && "fadeFirstTheme") || undefined}
                >
                  <ImageCont>
                    <img src={image} alt={name} />
                    {!change && (
                      <BlackCovergeWithImage>
                        <img
                          src="/images/searchIcon.svg"
                          alt=""
                          onClick={() => history.push(`/products/${id}`)}
                        />
                      </BlackCovergeWithImage>
                    )}
                  </ImageCont>
                  <ImageFooter>
                    <h5>{name}</h5>
                    <p>{newPrice(price)}</p>
                    {change && (
                      <>
                        <p>{description}</p>
                        <button onClick={() => history.push(`/products/${id}`)}>
                          Details
                        </button>
                      </>
                    )}
                  </ImageFooter>
                </article>
              );
            }
          )
        )}
      </SectionGridCenter>
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 4rem;
`;
const ImageCont = styled.div``;
const BlackCovergeWithImage = styled.div``;
const ImageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  letter-spacing: var(--spacing);
  h5 {
    color: var(--grey-1);
    font-weight: 500;
  }
  p {
    color: var(--km7y-5);
  }
  margin-top: 20px;
`;

const SectionGridCenter = styled.div`
  display: grid;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
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

  &.the-other-theme {
    display: flex;
    flex-direction: column;
    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
    article {
      display: flex;
      padding-left: 10px;
      @media (max-width: 991px) {
        display: block;
        ${ImageFooter} {
          padding-left: 0;
        }
      }
    }
    ${ImageFooter} {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h5 {
        font-size: 20px;
        letter-spacing: var(--spacing);
        font-weight: bold;
        margin-bottom: 5px;
      }
      p {
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 5px;
      }
      & > p:nth-of-type(2) {
        font-size: 14px;
        font-weight: 400;
        color: var(--grey-4);
        letter-spacing: var(--spacing);
        margin: 5px 0 10px;
      }
      button {
        background-color: var(--km7y-5);
        border: none;
        color: white;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        font-size: 10px;
        letter-spacing: var(--spacing);
        transition: 0.2s;
        &:hover {
          background-color: var(--km7y-7);
        }
      }
    }
  }
  article {
    &.fadeFirstTheme {
      animation: fadeIn 0.3s;
      @-webkit-keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
`;
