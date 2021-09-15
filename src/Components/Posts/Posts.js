import React from 'react';
import {
    Container,
    Grid
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { SpinningCircles } from 'react-loading-icons';

function Posts() {
    //used the useSelector hook to connect to the reducer state.
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return (

        posts.isLoading ? (
            //Will show when the posts are loading.
            <Container>
                <div className={classes.loading}>
                    <SpinningCircles />
                </div>

            </Container>


        ) : (
            <Container>
                <Grid container spacing={3} className={classes.mainContainer}>
                    {/* Passing individual posts for rendering in a card,
                     used 'uid' as key because the api used returns the id in the 'uid' field */}
                    {
                        posts.posts.map(post => (
                            <Grid item key={post.uid} xs={12} sm={6} md={4}>
                                <Post post={post} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>




        )



    )

}

export default Posts
