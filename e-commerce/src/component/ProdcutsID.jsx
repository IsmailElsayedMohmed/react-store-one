import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import BackHomeBackground from "./BackHomeBackground";
import Stars from "./Stars";
import PriceUtilit from "./PriceUtilit";
import { getTheBoughCart } from "../reducers";
import { useDispatch } from "react-redux";
function ProdcutsID({
  idProducts,
  match: {
    params: { id },
  },
  history,
}) {
  const [imges, setImges] = useState("");
  const [calc, setCalc] = useState(1);
  const [activeColor, setActiveColor] = useState("");
  const [prodcut, setProdcut] = useState([]);
  console.log();
  const dispatch = useDispatch();
  useEffect(() => {
    if (idProducts.length !== 0) {
      const prodcut = idProducts.filter((e) => e.id === id);
      prodcut.length === 0 && history.replace("/error");
      setProdcut(prodcut);
    }
  }, [idProducts]);
  const onCalc = (minus, stock) => {
    console.log(stock);
    if (minus) {
      if (calc === 1) return null;
      return setCalc(calc - 1);
    }
    if (calc <= stock) {
      return setCalc(calc + 1);
    }
  };
  return (
    <>
      {prodcut.length === 0 ? (
        <img
          src="/images/snakeCircle.gif"
          style={{ display: "block", margin: "20px auto" }}
        />
      ) : (
        prodcut.map(
          (
            {
              category,
              colors,
              company,
              description,
              images,
              name,
              price,
              id,
              stars,
              reviews,
              shipping,
              stock,
            },
            index
          ) => {
            return (
              <Container
                key={id.toString()}
                className={name ? "fadeFirstTheme" : ""}
              >
                <BackHomeBackground state={"Products"} name={name} />
                <div className="container" style={{ padding: "10px 0 50px " }}>
                  <Button
                    className="btn"
                    onClick={() => history.replace("/products")}
                  >
                    BACK TO PRODUCTS
                  </Button>
                  <Wrapper>
                    <Images>
                      <BigImge
                        src={imges ? imges : images[0].url}
                        alt={name}
                        className={
                          (index === 0 && !imges ? "active" : "") ||
                          imges === images[0].url
                            ? "active"
                            : ""
                        }
                      />
                      <ImageCont>
                        {images.map(({ id, url: src }, index) => {
                          return (
                            <img
                              key={id}
                              src={src}
                              name={name}
                              onClick={() => setImges(src)}
                              className={
                                (index === 0 && !imges ? "active" : "") ||
                                (imges === src ? "active" : "")
                              }
                            ></img>
                          );
                        })}
                      </ImageCont>
                    </Images>
                    <Title>
                      <h5>{name}</h5>
                      <Stars Stars={stars} reviews={reviews} />
                      <div className="price">{PriceUtilit(price)}</div>
                      <p>{description}</p>
                      <Info>
                        <div>Available : </div>
                        <div>In Stock</div>
                        <div>SKU :</div>
                        <div>{id}</div>
                        <div>Brand :</div>
                        <div>{company}</div>
                        <div>
                          <hr />
                        </div>
                        <div>
                          <hr />
                        </div>
                        {stock ? (
                          <div>
                            <div>Colors: </div>
                            <Color>
                              <ul>
                                {colors.map((color, index) => {
                                  if (!activeColor && index == 0)
                                    setActiveColor(color);
                                  return (
                                    <LiBackground
                                      className={
                                        !activeColor
                                          ? index === 0
                                            ? "active"
                                            : ""
                                          : activeColor === color
                                          ? "active"
                                          : ""
                                      }
                                      dataColor={color}
                                      key={color}
                                      onClick={() => setActiveColor(color)}
                                    >
                                      <BsCheck className="tick" />
                                    </LiBackground>
                                  );
                                })}
                              </ul>
                            </Color>
                          </div>
                        ) : (
                          ""
                        )}
                      </Info>
                      <AddCartWithNumber>
                        {stock ? (
                          <>
                            <Calc>
                              <div onClick={() => onCalc("minus", stock)}>
                                -
                              </div>
                              <div>{calc}</div>
                              <div onClick={() => onCalc("", stock)}>+</div>
                            </Calc>
                            <AddCart
                              className="btn btnAddCart"
                              onClick={() => {
                                const color = activeColor ? activeColor : "";
                                dispatch(
                                  getTheBoughCart([
                                    { ...prodcut[0], calc, color },
                                  ])
                                );
                                history.push("/cart");
                              }}
                            >
                              Add To Cart
                            </AddCart>
                          </>
                        ) : (
                          ""
                        )}
                      </AddCartWithNumber>
                    </Title>
                  </Wrapper>
                </div>
              </Container>
            );
          }
        )
      )}
    </>
  );
}

const Container = styled.div`
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
`;
const Button = styled.button`
  padding: 0.3rem;
  font-size: 13px;
  margin: 3rem 0;
`;
const Wrapper = styled.div`
  display: grid;
  @media (min-width: 761px) {
    grid-template-columns: 1fr 1fr;
    gap: 70px;
  }
`;
const BigImge = styled.img``;
const Images = styled.div`
  box-sizing: border-box;
  ${BigImge} {
    width: 100%;
    height: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    object-fit: cover;
    transition: 0.3s;
    border: 3px solid transparent;
    &.active {
      border: 3px solid var(--km7y-5);
    }
  }
`;
const ImageCont = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  cursor: pointer;
  img {
    width: 100%;
    height: 85px;
    object-fit: cover;
    margin: 10px 10px 10px 0;
    border: 2px solid transparent;
    border-radius: 5px;
  }
  img:last-of-type {
    margin-right: 0;
  }
  img.active {
    border: 2px solid var(--km7y-5);
  }
`;
const Title = styled.div`
  .price {
    font-size: 20px;
    color: var(--km7y-5);
    letter-spacing: var(--spacing);
    font-weight: bold;
    margin: 10px 0;
  }
  p {
    letter-spacing: var(--spacing);
    color: var(--grey-5);
    line-height: 1.5;
    margin-bottom: 20px;
    font-size: 15px;
  }
  h5 {
    font-size: 50px;
    @media (max-width: 761px) {
      & {
        font-size: 40px;
      }
    }
  }
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: repeat(4, 35px);
  div:nth-child(odd) {
    color: var(--grey-3);
    font-weight: bold;
  }
`;
const AddCartWithNumber = styled.div``;
const Calc = styled.div`
  display: flex;
  margin: 20px 0 0px;
  width: 120px;
  justify-content: space-between;
  & > div:not(:nth-child(2))::selection {
    background-color: transparent;
  }
  div {
    font-size: 40px;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-size: 40px;
    color: var(--grey-1);
    line-height: 1.2;
  }
  div:not(:nth-child(2)) {
    cursor: pointer;
    color: var(--grey-4);
  }
`;
const AddCart = styled.div`
  &.btnAddCart {
    padding: 7px 15px;
    font-size: 14px;
    &::selection {
      background-color: transparent;
    }
  }
`;
const Color = styled.div`
  ul {
    display: flex;
    width: 200px;
    @media (min-width: 761px) {
      display: grid;
      grid-template-columns: repeat(6, 2fr) 6fr;
    }
  }
`;
const LiBackground = styled.li`
  box-sizing: border-box;
  background-color: ${({ dataColor }) => dataColor};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-top: 4px;
  display: block;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
  color: var(--grey-1);
  position: relative;
  margin-right: 0.4rem;
  opacity: 0.7;
  .tick {
    width: 20px;
    height: 20px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
  &:hover .tick {
    display: block;
    opacity: 1;
  }
  &.active {
    opacity: 1;
    box-shadow: 0px 0px 0 2px #c7c7c7;
    padding-bottom: 3px;
  }
  &.active .tick {
    display: block;
    opacity: 1;
  }
`;

export default ProdcutsID;
