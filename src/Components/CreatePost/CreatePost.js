import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Container,
    Grow
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { creatPost } from '../../actions/postActions';
import { useHistory } from 'react-router-dom';

function CreatePost() {
    const [post, setPost] = useState({
        name: '',
        description: '',
        logo: ''

    })
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

    //used useHistory hook to provide navigation once the form is submitted.
    const history = useHistory();

    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsNameEmpty(false);
        setIsDescriptionEmpty(false);

        if (post.name === '') {
            setIsNameEmpty(true);
        }
        if (post.description === '') {
            setIsDescriptionEmpty(true);
        }

        //posting the data only when all the state values are filled.
        if (post.name && post.description && post.logo) {
            dispatch(creatPost(post));
            history.push('/');
            setPost({
                name: '',
                description: '',
                logo: ''
            })
        }

    }


    return (
        <Container className={classes.cardContainer}>
            <Grow in>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.cardTitle} variant='h5' align='center' gutterBottom>
                            Create a new post
                        </Typography>
                        <form
                            autoComplete='off'
                            noValidate
                            className={classes.formContent}
                            onSubmit={handleSubmit}>
                            <TextField
                                className={classes.formInput}
                                variant='outlined'
                                label='Title'
                                name='name'
                                fullWidth
                                value={post.name}
                                onChange={(e) => setPost({ ...post, name: e.target.value })}
                                required
                                error={isNameEmpty}
                            />
                            <TextField
                                className={classes.formInput}
                                variant='outlined'
                                label='Description'
                                name='description'
                                fullWidth
                                value={post.description}
                                onChange={(e) => setPost({ ...post, description: e.target.value })}
                                required
                                multiline
                                rows={3}
                                error={isDescriptionEmpty}
                            />
                            <div className={classes.imageInput}>
                                {/* Used for taking image from the user */}
                                <FileBase
                                    type='file'
                                    multiple={false}
                                    onDone={({ base64 }) => setPost({ ...post, logo: base64 })}
                                />
                            </div>
                            <div className={classes.btn}>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    color='secondary'>
                                    Submit
                                </Button>
                            </div>

                        </form>

                    </CardContent>
                </Card>
            </Grow>

        </Container>
    )
}

export default CreatePost
