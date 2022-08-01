import { ResetTv } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import pic from '../../images/login.svg'
import './Login.css';
const Register = () => {
    const [errors,setErrors] = useState('');
    const [image,setImage] = useState(null);
    const { register, handleSubmit, error, reset } = useForm();
    const formData = new FormData();
    const onSubmit = data => {
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('confirm_password', data.confirm_password);
        formData.append('gender', data.gender);
        formData.append('number', data.number);
        formData.append('age', data.age);
        formData.append('image', image);
        fetch('http://localhost:5000/users', {
  method: 'POST',
  body: formData
})
.then((response) => response.json())
.then((result) => {
  console.log('Success:', result);
  setErrors(result.msg);
})
.catch((error) => {
  console.error('Error:', error);
});
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
                                <h3>Register Form </h3>
                                <h2>   {errors}</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='enter your name' {...register("name", { required: true })} />
                                    <input placeholder='enter your email' {...register("email", { required: true })} />
                                    <input  placeholder='password' {...register("password", { required: true })} />
                                    <input placeholder='confirm password' {...register("confirm_password", { required: true })} />
                                    <input type="number" placeholder='minAge 12 maxAge 99' {...register("age", { min: 12, max: 99 })} />
                                    <input type='number' placeholder='phone' {...register("number", { required: true, minLength: 11, maxLength: 14 })} />
                                    <input accept='image/*' type="file" {...register("file")}  onChange={e=>setImage(e.target.files[0])} />
                                    <select {...register("gender")}>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="other">other</option>
                                    </select>

                                    <input className='submit-btn' type="submit" value='register' />
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;