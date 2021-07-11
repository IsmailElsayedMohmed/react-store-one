import { createSlice } from "@reduxjs/toolkit";
import db, { auth, Provider } from "../firebase";

const ProdcutSlice = createSlice({
  name: "CheckProdcut",
  initialState: {
    play: "reerw",
  },
  reducers: {},
});

export const {} = ProdcutSlice.actions;
export default ProdcutSlice.reducer;
