import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
        width: '40%',
        borderRadius: '15px'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardTitle: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20
        },
    },
    formContent: {
        padding: '0px 20px',
        marginTop: '20px'
    },
    formInput: {
        width: "97%",
        margin: '10px 0'
    },
    imageInput: {
        width: '97%',
        margin: '10px 0',
    },
    submitBtn: {
        backgroundColor: '#ff4500',
        color: 'white'

    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
    }
}))

export default useStyles;