import { createSlice } from '@reduxjs/toolkit'
import { MoviesApi } from '../MoviesApi'


export const MovieSlice = createSlice({
  name: 'movies',
  initialState:MoviesApi,
  reducers: {

    addMovie : (state,actions)=>{
        return [...state,actions.payload];
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {addMovie  } = MovieSlice.actions

export default MovieSlice.reducer