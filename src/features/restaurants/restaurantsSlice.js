import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({ name: action.payload, id: uuid() });
    },
    restaurantRemoved(state, action) {
      const index = state.entities.findIndex(
        (restaurant) => restaurant.id === action.payload
      );
      state.entities.splice(index, 1);
    },
    restaurantUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingRestaurant = state.entities.find(
        (restaurant) => restaurant.id === id
      );
      if (existingRestaurant) {
        existingRestaurant.title = title;
        existingRestaurant.content = content;
      }
    },
  },
});

export const { restaurantAdded, restaurantRemoved, restaurantUpdated } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
