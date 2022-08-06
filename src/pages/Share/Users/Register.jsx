// import { ResetTv } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { useForm } from "react-hook-form";
import pic from '../../images/login.svg'
import './Login.css';
const Register = () => {
    const navigate = useNavigate();
    const { userData, isLoading, authError, setAuthError } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false);
    const handleClickShowPasswords = () => setShowPassword(!showPassword);
    const handleMouseDownPasswords = () => setShowPassword(!showPassword);
    const handleClickShowPasswordss = () => setShowPasswords(!showPasswords);
    const handleMouseDownPasswordss = () => setShowPasswords(!showPasswords);
    const [values, setValues] = useState({});
    const handleChange = (prop) => (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newValue = { ...values };
        newValue[field] = value;
        setValues(newValue);
        setAuthError('');
    };
    const onHandleSubmit = e => {
        userData('users', values, navigate)
        console.log(values);
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
                    <Grid item xs={12} sm={12} md={6}  >
                        <div >
                            <div className='registe'>
                                <h3>Register Form </h3>
                                <span>{authError}</span>
                                <form action='' onSubmit={onHandleSubmit}>
                                    <Box
                                        component="form"
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            sx={{ width: '50%' }}
                                            label="Your Name"
                                            type='text'
                                            name='name'
                                            onChange={handleChange('name')}
                                            variant="standard" />
                                        <br />
                                        <TextField
                                            sx={{ width: '50%' }}
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                            label="Email"
                                            type='email'
                                            name='email'
                                            onChange={handleChange('email')}
                                            variant="standard" />
                                    </Box>
                                    <br />
                                    <TextField
                                        sx={{ width: '50%' }}
                                        label='Password'
                                        variant="standard"
                                        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                        name='password'
                                        onChange={handleChange('password')}
                                        InputProps={{ // <-- This is where the toggle button is added.
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPasswords}
                                                        onMouseDown={handleMouseDownPasswords}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <br />
                                    <TextField
                                        sx={{ width: '50%' }}
                                        label='Confirm Password'
                                        variant="standard"
                                        name='confirm_password'
                                        type={showPasswords ? "text" : "password"}// <-- This is where the magic happens
                                        onChange={handleChange('confirm_password')}
                                        InputProps={{ // <-- This is where the toggle button is added.
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPasswordss}
                                                        onMouseDown={handleMouseDownPasswordss}
                                                    >
                                                        {showPasswords ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <br />
                                    <br />
                                    <Stack spacing={4} direction="row" justifyContent='center'>
                                        <Button type='submit' variant="contained">Register</Button>
                                    </Stack>
                                </form>

                                <div>
                                    <span>already have an account ? </span>
                                    <Link to='/login'><Button>Log In</Button></Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='login-img'>
                            <img className='login-pic' src={pic} alt='loading...' />
                        </div>
                    </Grid>
                </Grid>}
            </Container>
        </div>
    );
};

export default Register;