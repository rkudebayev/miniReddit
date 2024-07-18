import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Reddit } from "../util/Reddit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        error: false,
        isLoading: false,
        selectedSubreddit: '/r/pics/',
        searchTerm: '',
    },
    reducers: {

        setPosts(state, action) {
            state.posts = action.payload;
        },
        loadPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        postsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        postsError(state) {
            state.isLoading = false;
            state.error = true;
        },

        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        setSearchTerm (state, action) {
            state.searchTerm = action.payload;
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
          },
          startGetComments(state, action) {
            // If we're hiding comment, don't fetch the comments.
            state.posts[action.payload].showingComments = !state.posts[action.payload]
              .showingComments;
            if (!state.posts[action.payload].showingComments) {
              return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
          },
          getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
          },
          getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
          },
    }
})

//thunk for posts

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(loadPosts());
        const posts = await Reddit.getSubreditPosts(subreddit);
        const postsWithMetadata = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
          }));
          dispatch(postsSuccess(postsWithMetadata));
        } catch (error) {
          dispatch(postsError());
        }
      };

export const {
    setPosts,
    loadPosts, 
    postsSuccess, 
    postsError,
    setSelectedSubreddit,
    setSearchTerm
} = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
const selectSearchTerm = (state) => state.posts.searchTerm;

export default postsSlice.reducer;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
      if (searchTerm !== '') {
        return posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      return posts;
    }
  );