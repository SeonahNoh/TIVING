import { configureStore, createSlice } from "@reduxjs/toolkit";
import movie from './movie.json';


const movieList = createSlice({
  name: 'movieList',
  initialState: movie
})

const store = configureStore({
  reducer: {
    movieList: movieList.reducer
  }
});

export default store;
