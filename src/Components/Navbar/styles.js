import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '10px 50px',
        [theme.breakpoints.down('xs')]: {
            padding: 0
        }
    },
    title: {
        color: 'black',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: 22
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            fontSize: 10
        }
    },
}))

export default useStyles;