import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaLess, FaSlidersH } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { filterBy, onChangeTheme } from "../reducers/index";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderProducts() {
  const dispatch = useDispatch();
  const onchange = (e) => dispatch(onChangeTheme(e));
  const change = useSelector((state) => state.inital.changeTheme);
  const inital = {
    PriceLowest: false,
    PriceHeighest: false,
    sortAsec: false,
    sortDesc: false,
  };
  const [items, setItems] = useState(inital);
  useEffect(() => {
    dispatch(filterBy(items));
  }, [items]);
  const onSort = ({ target: { value } }) => {
    setItems({ ...inital, [value]: !items[value] });
  };
  const sortSelect = [
    {
      value: "PriceLowest",
      name: "price(lowest)",
    },
    {
      value: "PriceHeighest",
      name: "price(highest)",
    },
    {
      value: "sortAsec",
      name: "name (a - z)",
    },
    {
      value: "sortDesc",
      name: "name (z - a)",
    },
  ];
  return (
    <Wrapper>
      <HeaderRight>
        <ShadowIcons>
          <a>
            <FaSlidersH
              className={!change ? "icon1 active" : "icon1"}
              onClick={() => onchange(false)}
            />
          </a>
          <a>
            <GoThreeBars
              className={change ? "icon2 active" : "icon1"}
              onClick={() => onchange(true)}
            />
          </a>
        </ShadowIcons>
        <TitleProducts>
          <span>23</span> Products Found
        </TitleProducts>
        <div>
          <hr />
        </div>
        <Price>
          <label htmlFor="sort"> Sort by </label>
          <select id="sort" onChange={onSort}>
            {sortSelect.map((e, index) => {
              return (
                <option key={index} name={e.value} value={e.value}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </Price>
      </HeaderRight>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 0 0 2rem 0;
`;
const HeaderRight = styled.div`
  display: grid;
  white-space: nowrap;
  margin: 10px 0;
  flex-direction: column;

  @media (min-width: 574px) {
    justify-content: center;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 5fr 15fr 5fr;
    hr {
      margin: 0 10px;
    }
  }
`;
const ShadowIcons = styled.div`
  a {
    text-decoration: none;
    cursor: pointer;
    .icon1,
    .icon2 {
      width: 17px;
      height: 17px;
      border-radius: 4px;
      border: 1px solid black;
      padding: 4px;
      color: black;
      transition: 0.3s;
      background-color: white;
      margin-left: 10px;
      &.active {
        background-color: black;
        color: white;
      }
      @media (max-width: 574px) {
        & {
          margin: 10px 10px 10px 0;
        }
      }
    }
    .icon2 {
      margin-right: 10px;
    }
  }
`;
const Price = styled.div`
  select {
    padding: 0.2rem 0.8rem;
    border: none;
    font-size: 18px;
  }
  select:focus {
    outline: 1px solid var(--grey-2);
  }
`;
const TitleProducts = styled.div``;
