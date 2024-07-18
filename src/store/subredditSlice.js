import { createSlice } from "@reduxjs/toolkit";
import { Reddit } from "../util/Reddit";

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
    },
    reducers: {
        loadSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        subredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        subredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
})

//thunk

export const fetchSubreddits = () => 
    async (dispatch) => {
        try {
            dispatch(loadSubreddits());
            const subreddits = await Reddit.getSubreddit();
            dispatch(subredditsSuccess(subreddits));
        } catch (error) {
            dispatch(subredditsFailed);
        }
}

export const {
    loadSubreddits, 
    subredditsSuccess,
    subredditsFailed
} = subredditSlice.actions;

export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditSlice.reducer;

