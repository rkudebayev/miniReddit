import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from './subredditSlice';
import postsReducer from './postsSlice';

const store = configureStore({
    reducer: {
        subreddits: subredditReducer, 
        posts: postsReducer,
    }
});

export default store;