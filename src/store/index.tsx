import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext({} as any);
const currentTheme = Cookies.get("darkMode") === "ON" ? true : false;
const currentPage = Cookies.get("page");
const initialState = {
  darkMode: currentTheme,
  currentPage,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "CHANGE_PAGE":
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
