import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserInfo } from "../../components/form";

interface IUserSlice {
  userName: string;
  email: string;
  pass: string;
}

const initialState: IUserSlice = {
  userName: `guest${new Date().getTime()}`,
  email: "",
  pass: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo(state, action: PayloadAction<IUserInfo>) {
      if (typeof action.payload === "object") {
        state.userName = action.payload.name;
        state.email = action.payload.email;
        state.pass = action.payload.pass;
        return;
      }
    },
  },
});

export const { getUserInfo } = user.actions;
export default user.reducer;
