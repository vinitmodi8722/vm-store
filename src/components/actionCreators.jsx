import { DECREMENT_ITEM, INCREMENT_ITEM } from "./actionTypes";

export const incrementItem = (itemId) => ({
    type: INCREMENT_ITEM,
    payload: itemId,
  });
  
  export const decrementItem = (itemId) => ({
    type: DECREMENT_ITEM,
    payload: itemId,
  });