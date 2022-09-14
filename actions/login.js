const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        loginPost(state, action) {
            console.log(action.palyload);

        },
        resetPost(state, action) {
            console.log(action.palyload);

        },
        deletePost(state, action) {
            console.log(action.palyload);

        },
    },
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer