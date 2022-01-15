import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ducks/theme";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
