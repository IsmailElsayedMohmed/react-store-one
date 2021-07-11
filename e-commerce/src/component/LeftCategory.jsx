import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import {
  changeByCategory,
  filterUlCategorey,
  getUi,
  filterBy,
} from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import newPrice from "./PriceUtilit";

export default function LeftCategory() {
  const dispatch = useDispatch();
  const inital = {
    search: "",
    category: "",
    selector: "all",
    color: "all",
    range: "",
    checkBox: false,
    delteAllFilter: false,
  };
  const [categoryLine, setCategoryLine] = useState("all");
  const [items, setItems] = useState(inital);
  const [state, setState] = useState({
    uiColors: [""],
    uiNames: [""],
    uiCompany: [""],
  });
  const products = useSelector((state) => state.inital.Products);
  const AllhighPrice = products.slice().sort((a, b) => b.price - a.price);
  const highPrice = AllhighPrice[0] ? AllhighPrice[0].price : 0;
  const onChange = (e) => {
    let {
      currentTarget: { name, value },
    } = e;
    const color = e.currentTarget.dataset.color;
    const newName = e.currentTarget.getAttribute("name");
    setItems({
      ...items,
      [name || newName]: value || color,
    });
  };
  useEffect(() => {
    uiCategory();
    dispatch(filterBy(items));
  }, [products, items]);

  const uiCategories = (name) => {
    return products.reduce(
      (calc, mins) => {
        return [
          ...new Set(
            name === "colors" ? [...calc, ...mins[name]] : [...calc, mins[name]]
          ),
        ];
      },
      ["all"]
    );
  };
  const uiCategory = () => {
    const uiNames = uiCategories("category");
    const uiCompany = uiCategories("company");
    const uiColors = uiCategories("colors");
    setState({
      uiColors,
      uiNames,
      uiCompany,
    });
  };
  const changeToFirstUpperCase = (name) => {
    const firstIndex = name.charAt(0).toUpperCase();
    const newName = firstIndex + name.slice(1, name.length);
    return newName;
  };
  return (
    <div>
      <Container>
        <Input>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={items.search || ""}
            onChange={onChange}
          />
        </Input>
        <Category>
          <h5>Category</h5>
          <ul>
            {state.uiNames.map((name) => {
              const newName = changeToFirstUpperCase(name);
              return (
                <li key={name}>
                  <a
                    name="category"
                    className={name === categoryLine ? "Light-line" : ""}
                    onClick={({ target: { name: categorey } }) => {
                      setCategoryLine(name);
                      setItems({ ...items, [categorey]: name });
                    }}
                  >
                    {newName}
                  </a>
                </li>
              );
            })}
          </ul>
        </Category>
        <Company>
          <h5>Company</h5>
          <select name="selector" onChange={onChange} value={items.selector}>
            {state.uiCompany.map((name) => {
              const upperName = changeToFirstUpperCase(name);
              return (
                <option value={name} key={name}>
                  {upperName}
                </option>
              );
            })}
          </select>
        </Company>
        <Color>
          <h5>Color</h5>
          <ul>
            {state.uiColors.map((e) => {
              return (
                <LiBackground
                  key={e}
                  dataColor={e}
                  data-color={e}
                  onClick={onChange}
                  className={
                    items.color === e
                      ? e === "all"
                        ? "newActive"
                        : "active"
                      : ""
                  }
                  name={"color"}
                >
                  {e === "all" ? (
                    changeToFirstUpperCase(e)
                  ) : (
                    <BsCheck className="tick" />
                  )}
                </LiBackground>
              );
            })}
          </ul>
        </Color>
        <Price>
          <h5>Price</h5>
          <Value>{newPrice(items.range ? items.range : highPrice)}</Value>
          <input
            onChange={onChange}
            type="range"
            value={items.range ? items.range : highPrice}
            id="volume"
            name="range"
            min="0"
            max={highPrice}
          ></input>
        </Price>
        <FreeShiping>
          <label htmlFor="check">Free Shipping</label>
          <input
            type="checkbox"
            id="check"
            name="checkBox"
            checked={items.checkBox}
            value={items.checkBox}
            onChange={() => setItems({ ...items, checkBox: !items.checkBox })}
          />
        </FreeShiping>
        <ClearFilter>
          <button
            onClick={() => {
              setItems(inital);
              setCategoryLine("all");
            }}
            name="delteAllFilter"
          >
            Clear Filters
          </button>
        </ClearFilter>
      </Container>
    </div>
  );
}
const Container = styled.div`
  position: sticky;
  padding-top: 10px;
  top: 10px;
  @media (min-width: 761px) {
  }
  h5 {
    margin: 1rem 0;
    letter-spacing: var(--spacing);
    color: var(--grey-1);
  }
`;
const Input = styled.div`
  input {
    width: 100%;
    padding: 0.6rem 0.7rem;
    border: none;
    font-size: 14px;
    background-color: var(--grey-10);
    outline: none;
    letter-spacing: var(--spacing);
    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;
const Category = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    li {
      letter-spacing: var(--spacing);
      margin: 0.5rem 0;
      font-size: 15px;
      color: var(--grey-5);
      a {
        cursor: pointer;
        color: var(--grey-5);
        padding: 0.3rem 0;
      }
      a.Light-line {
        border-bottom: 1px solid var(--grey-1);
      }
    }
  }
`;
const Company = styled.div`
  select {
    background-color: var(--grey-10);
    padding: 0.2rem 1rem;
    outline: none;
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
  &:not(:first-of-type) {
    background-color: ${({ dataColor }) => dataColor};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 4px;
    display: block;
    cursor: pointer;
    font-size: 15px;
    transition: 0.3s;
    color: var(--grey-1);
    position: relative;
    opacity: 0.4;
    .tick {
      width: 15px;
      height: 15px;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
    &.active {
      display: block;
      opacity: 1;
      .tick {
        display: block;
      }
    }
  }
  &:first-of-type {
    margin-right: 0.4rem;
    cursor: pointer;
    opacity: 0.7;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: 0.3s;
    &.newActive {
      opacity: 1;
      border-bottom: 1px solid var(--grey-1);
      padding-bottom: 3px;
    }
  }
`;
const Value = styled.div``;
const Price = styled.div`
  margin-bottom: 20px;
  & > ${Value} {
    font-size: 15px;
    color: var(--grey-1);
  }
`;
const FreeShiping = styled.div`
  margin-bottom: 20px;
  label {
    padding-right: 10px;
  }
`;
const ClearFilter = styled.div`
  margin-bottom: 1rem;
  button {
    border: none;
    outline: none;
    background: var(--dark-red);
    padding: 5px 10px;
    border-radius: 3px;
    letter-spacing: var(--spacing);
    color: white;
    cursor: pointer;
  }
`;
