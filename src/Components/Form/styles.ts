import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formContainer: {
            margin: '1rem',
            '& .MuiTextField-root': {
                margin: '1rem 0',
            },
        },
        card: {
            margin: '2rem 0',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center'
        }
    })
);

export default useStyles;
