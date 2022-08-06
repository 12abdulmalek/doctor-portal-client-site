
import { Box, Button, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import pic from '../../images/login.svg'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, error, reset } = useForm();
    const navigate = useNavigate();
    const { userData , isLoading , authError,setAuthError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        const field = event.target.name;
        const value = event.target.value;
        const getData = { ...loginData };
        getData[field] = value;
        setLoginData(getData);
        setAuthError('');
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const onHandleSubmit = e => {

        userData('login',loginData, navigate);
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                {
                    isLoading && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                }
                 {!isLoading && <Grid container spacing={4} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} sm={12} md={7}  >

                        <h3>Login form</h3>
                        <h4>{authError}</h4>
                        <form action='' onSubmit={onHandleSubmit}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                              
                                    id="standard-basic"
                                    label="Email"
                                    type='Your Email'
                                    name='email'
                                    onChange={handleChange('email')}
                                    variant="standard" />
                            </Box>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <br />
                            <Stack spacing={2} direction="row" justifyContent='center'>
                                <Button type='submit' variant="contained">Login</Button>
                            </Stack>
                        </form>
                      <div>
                        <span>new user ? </span>
                        <Link to='/register'><Button>Register</Button></Link>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <div className='login-img'>
                            <img className='login-pic' src={pic} alt='loading...' />
                        </div>
                    </Grid>
                </Grid>}
            </Container>
        </div>
    );
};

export default Login;