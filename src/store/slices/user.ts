import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  userName: string;
}

const initialState: UserSlice = {
  userName: "unknown",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const { getUserName } = user.actions;
export default user.reducer;
