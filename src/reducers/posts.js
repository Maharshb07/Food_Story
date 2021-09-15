import { FETCH_POSTS, CREATE_POST, POSTS_LOADING } from '../actions/actionTypes';

const initState = {
    isLoading: true,
    posts: []
}

const posts = (state = initState, action) => {

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isLoading: false,
                posts: [action.payload]
            }

        case POSTS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case CREATE_POST:
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }

}

export default posts;