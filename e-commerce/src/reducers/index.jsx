import { createSlice } from "@reduxjs/toolkit";
import db, { auth, Provider } from "../firebase";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import _ from "loadsh";
function getLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
const slice = createSlice({
  name: "Products",
  initialState: {
    Products: [],
    user: "",
    filterCategory: [],
    idProducts: [],
    changeTheme: false,
    filterUl: [],
    boughtCart: getLocalStorage(),
  },
  reducers: {
    ChangeTheme: (state, { payload }) => {
      state.changeTheme = payload;
    },
    SignIn: (state, { payload }) => {
      state.user = { payload };
    },
    SignOut: (state, { payload }) => {
      state.user = "";
    },
    getProdcuts: (state, { payload }) => {
      state.Products = payload;
      state.filterCategory = payload;
    },
    getIdProdcuts: (state, { payload }) => {
      state.idProducts = payload;
    },
    outId: (state, { payload }) => {
      state.idProducts = "";
    },
    changeCategory: (state, { payload }) => {
      state.filterCategory = payload;
    },
    GetUlCategory: (state, { payload }) => {
      state.filterUl = payload;
    },
    allFilter: (state, { payload }) => {
      state.filterCategory = payload;
    },
    filterbyRightHearr: (state, { payload }) => {
      state.filterCategory = payload;
    },
    boughtCart: (state, { payload }) => {
      state.boughtCart.push(...payload);
    },
    delteProdcutCart: (state, { payload }) => {
      state.boughtCart = payload;
    },
    calcOperation: (state, { payload }) => {
      state.boughtCart = payload;
    },
  },
});

export const {
  ChangeTheme,
  SignIn,
  SignOut,
  getProdcuts,
  getIdProdcuts,
  outId,
  changeCategory,
  GetUlCategory,
  allFilter,
  filterbyRightHearr,
  boughtCart,
  delteProdcutCart,
  calcOperation,
} = slice.actions;
export default slice.reducer;

// bought Cart

export const getTheBoughCart = (prodcut) => (dispatch, getState) => {
  const boughtItems = getState().inital.boughtCart.map((e) => e.id);
  console.log(prodcut);
  if (!boughtItems.includes(prodcut[0].id))
    return dispatch(boughtCart(prodcut));
};
export const delteTheCart = (id) => (dispatch, getState) => {
  const boughtItems = getState().inital.boughtCart.filter((e) => e.id !== id);
  return dispatch(delteProdcutCart(boughtItems));
};
export const mainCalc =
  (id, calc, operation, stock) => (dispatch, getState) => {
    let boughtItems = getState().inital.boughtCart.map((prodcut) => {
      if (prodcut.id === id) {
        if (operation === "minus") {
          return { ...prodcut, calc: calc - 1 };
        } else {
          if (calc <= stock) return { ...prodcut, calc: calc + 1 };
        }
      }
      return prodcut;
    });
    dispatch(calcOperation(boughtItems));
  };

// Action Category

export const filterUlCategorey = () => (dispatch, getState) => {
  const state = getState().inital.Products.reduce(
    (calc, mins) => {
      return [...new Set([...calc, mins.category])];
    },
    ["all"]
  );
  dispatch(GetUlCategory(state));
};

export const getUi = () => (dispatch, getState) => {
  return getState().inital.filterUl;
};

export const changeByCategory = (name) => (dispatch, getState) => {
  const filterProdcut = getState().inital.Products;
  dispatch(changeByCategory(filterProdcut));
};
export const filterBy = (name) => (dispatch, getState) => {
  const allProdcut = getState().inital.Products;
  const thefilterProdcut = getState().inital.filterCategory;
  let filterProdcut = [...allProdcut];
  const {
    search,
    selector,
    color,
    range,
    checkBox,
    category,
    delteAllFilter,
    PriceLowest,
    PriceHeighest,
    sortAsec,
    sortDesc,
  } = name;
  if (search && search !== "all") {
    filterProdcut = filterProdcut.filter((e) =>
      e.name.toLowerCase().startsWith(search)
    );
  }
  if (selector && selector !== "all") {
    filterProdcut = filterProdcut.filter((e) => e.company === selector);
  }
  if (checkBox) {
    filterProdcut = filterProdcut.filter((e) => e.shipping === checkBox);
  }
  if (range) {
    filterProdcut = filterProdcut.filter((e) => e.price <= range);
  }
  if (color && color !== "all") {
    filterProdcut = filterProdcut.filter((e) => e.colors.includes(color));
  }
  if (category && category !== "all") {
    filterProdcut = filterProdcut.filter((e) => e.category === category);
  }
  if (delteAllFilter) {
    filterProdcut = filterProdcut;
  }
  if (PriceLowest) {
    filterProdcut = _.orderBy(thefilterProdcut, ["price"], ["asc"]);
  }
  if (PriceHeighest) {
    filterProdcut = _.orderBy(thefilterProdcut, ["price"], ["desc"]);
  }
  if (sortAsec) {
    filterProdcut = _.orderBy(thefilterProdcut, ["name"], ["asc"]);
  }
  if (sortDesc) {
    filterProdcut = _.orderBy(thefilterProdcut, ["name"], ["desc"]);
  }
  dispatch(allFilter(filterProdcut));
};

// Action
export const onChangeTheme = (payload) => (dispatch) => {
  dispatch(ChangeTheme(payload));
};

export const onSignIn = () => async (dispatch) => {
  const { user } = await auth.signInWithPopup(Provider);
  dispatch(SignIn(user));
};
export const onSignOut = () => async (dispatch) => {
  await auth.signOut();
  dispatch(SignOut(""));
};
//fireBase With An Aciton
export const getAllProdcutsFromDb = () => async (dispatch) => {
  db.collection("prodcuts").onSnapshot((snapShot) => {
    const payload = snapShot.docs.map((doc) => ({ ...doc.data() }));
    dispatch(getProdcuts(payload[0]["data"]));
  });
};
export const idProdcuts = () => (dispatch) => {
  db.collection("idProdcuts").onSnapshot(async (snapShot) => {
    const payload = await snapShot.docs.map((doc) => ({ ...doc.data() }));
    const neWPayload = payload.map((e) => e.data);
    dispatch(getIdProdcuts(neWPayload));
  });
};

export const emptyProdcut = () => (dispatch) => {
  return dispatch(outId());
};
// export const getAllProdcuts = (payload) => async (dispatch) => //

//for Filter ;
