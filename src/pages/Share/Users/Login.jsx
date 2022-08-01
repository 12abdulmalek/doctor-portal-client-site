
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import pic from '../../images/login.svg'
import './Login.css';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, error, reset } = useForm();
    const navigate = useNavigate();
    const {saveToken , authenticationLogin } = useAuth();
    const onSubmit = data => {
              authenticationLogin(data,navigate);
        reset();
        }
    return (
        <div>
            <Container>
                <Grid container spacing={4} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid xs={12} sm={12} md={6}>
                        <div className='login-img'>
                            <img className='login-pic' src={pic} alt='loading...' />
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}  >
                        <div className='register-form'>
                            <div className='register'>
                                <h3>Login form</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='enter your email' {...register("email", { required: true })} />
                                    <input placeholder='password' {...register("password", { required: true })} />
                                    <input className='submit-btn' type="submit" value='LOG IN' />
                                    <Link to='/register'>register</Link>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;