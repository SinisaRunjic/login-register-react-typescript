import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Store } from '../../Store';
import { ILoginRegister } from '../../interfaces';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const registrationSchema = yup.object().shape({
    name: yup.string().trim().required('Required.'),
    email: yup.string().trim().email('Enter valid email').required('Required.')
})


const Form: React.FC = () => {
    const { state, dispatch } = React.useContext(Store);
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<ILoginRegister>({
        resolver: yupResolver(registrationSchema)
    });
    const toggleRegistration = (user: ILoginRegister) => {
        const userValidate = state.list.find((listUser: ILoginRegister) => listUser.email === user.email);
        if (!userValidate) {
            const usersList = [...state.list, user]
            console.log(usersList)
            return (
                dispatch({
                    type: 'REGISTER_USER',
                    payload: usersList,
                }))
        }
        return (
            dispatch({
                type: 'USER_REGISTRED',
            }))
    }
    const toggleLogin = (user: ILoginRegister) => {
        const loginUserValidate = state.list.find((listUser: ILoginRegister) => JSON.stringify(listUser) === JSON.stringify(user));
        if (!!loginUserValidate)
            return (
                dispatch({
                    type: 'LOGIN_USER',
                    payload: user,
                }))
        return (
            dispatch({
                type: 'LOGIN_USER_FAILED',
            }))
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Card className={classes.card} >
                    <CardContent>
                        <form noValidate className={classes.formContainer}>
                            <TextField
                                inputRef={register}
                                name="name"
                                label="name"
                                variant="outlined"
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                                fullWidth
                            />
                            <TextField
                                inputRef={register}
                                name="email"
                                label="email"
                                variant="outlined"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                                fullWidth
                            />
                        </form>
                    </CardContent>
                    <CardActions className={classes.buttons}>
                        <Button size="small" onClick={handleSubmit(toggleLogin)} > Login</Button><Button size="small" onClick={handleSubmit(toggleRegistration)}>Register</Button>
                    </CardActions>
                </Card>
            </Container>
            {state.list && state.list.map((user: any) => (
                <p key={user.email}>{user.name} {user.email} </p>
            ))}
            {(state.email && state.name) ? `You are loggin. Name: ${state.name} Email: ${state.email}` : ''}
        </React.Fragment>
    );
}

export default Form;
