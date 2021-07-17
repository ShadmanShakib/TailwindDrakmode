import { TOGGLEMENU } from "./types";
const initState = {
  menu: false,
};

export default function layoutReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLEMENU:
      return { ...state, menu: !state.menu };
    default:
      return state;
  }
}
