import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grow
} from '@material-ui/core';
import useStyles from './styles';


function Post({ post }) {
    const classes = useStyles();
    return (
        <Grow in>
            <Card className={classes.card}>
                {/* Rendering a random image just in case the image had some issue fetching */}
                <CardMedia className={classes.image} image={post.logo || 'https://source.unsplash.com/random'} />
                <CardContent>
                    <Typography variant='h5' gutterBottom>
                        {post.name}
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary' className={classes.description}>
                        {post.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grow>

    )
}

export default Post
