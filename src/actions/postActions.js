
import * as ActionTypes from './actionTypes';
import { v4 } from 'uuid';

export const fetchPosts = () => dispatch => {
    dispatch(postsLoading());

    return fetch('https://random-data-api.com/api/restaurant/random_restaurant')     //api that returns a random restaurant info. 
        .then(response => response.json())
        .then(response => dispatch(addPosts(response)))
        .catch(error => {
            console.log(error);
        })
}

export const creatPost = (post) => dispatch => {

    const newPost = {
        ...post,
        uid: v4()      //Used field name uid to match the returns from the api call.
    }
    dispatch(addPost(newPost))
}


const addPosts = (posts) => ({
    type: ActionTypes.FETCH_POSTS,
    payload: posts
})

const postsLoading = () => ({
    type: ActionTypes.POSTS_LOADING
})

const addPost = (post) => ({
    type: ActionTypes.CREATE_POST,
    payload: post
})

