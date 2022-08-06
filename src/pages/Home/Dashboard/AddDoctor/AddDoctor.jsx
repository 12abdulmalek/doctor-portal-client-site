import { ResetTv } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import pic from '../../../images/login.svg'
const AddDoctor = () => {
    const [success,setSuccess] = useState();
    const [image,setImage] = useState(null);
    const { register, handleSubmit, error, reset } = useForm();
    const formData = new FormData();
    const onSubmit = data => {
        formData.append('name', data.name);
        formData.append('gender', data.gender);
        formData.append('education', data.education);
        formData.append('work_in', data.work_in);
        formData.append('experience', data.experience);
        formData.append('fee', data.fee);
        formData.append('specialist', data.specialist);
        formData.append('image', image);
        fetch('http://localhost:5000/doctors', {
  method: 'POST',
  body: formData
})
.then((response) => response.json())
.then((result) => {
  console.log('Success:', result);
  setSuccess(result.msg);
})
.catch((error) => {
  console.error('Error:', error);
  setSuccess(error.msg);
});
  reset();
    }
    return (
        <div>
            <Container>
                <Grid  container spacing={4} direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item={true} xs={12} sm={12} md={6}>
                        <div className='login-img'>
                            {/* <img className='login-pic' src={pic} alt='loading...' /> */}

                        </div>
                    </Grid>
                    <Grid item={true} xs={12} sm={12} md={6}  >
                        <div className='register-form'>
                            <div className='register'>
                                <h3>ADDING DOCTOR</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='enter doctor name' {...register("name", { required: true })} />
                                    <input placeholder='doctor education' {...register("education", { required: true })} />
                                    <input placeholder='doctor work place' {...register("work_in", { required: true })} />
                                    <input placeholder='doctor experience' {...register("experience", { required: true })} />
                                    <input placeholder='doctor feee' {...register("fee", { required: true })} />
                                    <input placeholder='specialist' {...register("specialist", { required: true })} />
                                    <input accept='image/*' type="file" {...register("file")}  onChange={e=>setImage(e.target.files[0])} />
                                    <select {...register("gender")}>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="other">other</option>
                                    </select>

                                    <input className='submit-btn' type="submit" value='register' />
                                </form>
                                <h1>{success}</h1>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AddDoctor;