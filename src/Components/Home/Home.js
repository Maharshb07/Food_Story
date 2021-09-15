import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import { Switch, Route } from 'react-router-dom';
import Posts from '../Posts/Posts';
import CreatePost from '../CreatePost/CreatePost';

function Home() {
    const dispatch = useDispatch();

    //used the dispatch hook for fetching the posts.
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])
    return (
        <>
            <Switch>
                <Route exact path='/' component={Posts} />
                <Route exact path='/createPost' component={CreatePost} />
            </Switch>
        </>
    )

}

export default Home
