import { TYPES } from "../actions/toDoActions";

const data = localStorage.getItem("goals");

export const initialState = data
  ? JSON.parse(data)
  : {
      order: [],
      objects: {},
    };

export function toDoReducer(state, action) {
  switch (action.type) {
    case TYPES.CREATE_GOAL: {
      const id = String(Date.now());
      const newState = {
        order: [...state.order, id],
        objects: { ...state.objects, [id]: { ...action.payload, id } },
      };
      localStorage.setItem("goals", JSON.stringify(newState));
      return newState;
    }
    case TYPES.UPDATE_GOAL: {
      state.objects[action.payload.id] = {
        ...state.objects[action.payload.id],
        ...action.payload,
      };
      const newState = { ...state };
      localStorage.setItem("goals", JSON.stringify(newState));
      return newState;
    }
    case TYPES.DELETE_GOAL: {
      delete state.objects[action.payload];
      const newState = {
        order: state.order.filter((el) => el !== action.payload),
        objects: state.objects,
      };
      localStorage.setItem("goals", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}
