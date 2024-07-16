import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/authReducer";
import api from "./api/api";
import micsSlice from "./reducer/micsReducer";
import chatSlice from "./reducer/chatReducer";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [micsSlice.name]: micsSlice.reducer,
    [chatSlice.name]: chatSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (mid) => [...mid(), api.middleware],
});

export default store;
