import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    Container,
    Button

} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom'

function Navbar() {
    const classes = useStyles();
    return (
        <Container>
            {
                <AppBar position='static' color='inherit' className={classes.navbar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component={Link} to='/' className={classes.title} variant='h4'>
                            Food Story
                        </Typography>
                        <Button className={classes.button} variant='contained' color='secondary' component={Link} to='/createPost'>
                            <span className={classes.btnText}>Create Post</span>
                        </Button>
                    </Toolbar>
                </AppBar>
            }

        </Container>
    )
}

export default Navbar
