import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Form: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Card className={classes.card} >
                    <CardContent>
                        <form noValidate className={classes.formContainer}>
                            <TextField name="name" label="name" variant="outlined" fullWidth />
                            <TextField name="email" label="email" variant="outlined" fullWidth />
                        </form>
                    </CardContent>
                    <CardActions className={classes.buttons}>
                        <Button size="small">Login</Button><Button size="small">Register</Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default Form;
