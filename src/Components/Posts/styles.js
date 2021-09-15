import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    mainContainer: {
        display: 'flex',
        marginBottom: '20px'
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250
    }
}))

export default useStyles;