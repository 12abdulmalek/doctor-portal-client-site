import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadFromLocalstorage } from '../../../utils/handleLocalhost';

const UpdateProfile = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    // const [value, setValue] = React.useState('Controlled');
    const [userData, setUserData] = useState();
    const [file, setFile] = React.useState(null);
    const formData = new FormData()
    useEffect(() => {
        fetch(`http://localhost:5000/profile/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [id])
    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newData = { ...data, email: data.email };
        newData[field] = value;
        setData(newData)
    };
    const upload_photo = (e) =>{
          setFile(e.target.files[0])
    }
    const updateProfile = e => {
     
        
        formData.append('userPhoto', file)
        formData.append('name', data.name)
        formData.append('gender', data.gender)
        formData.append('email', data.email)
      
        fetch('http://localhost:5000/profile', {
          method: 'PUT',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault();
    }
    // console.log(data);
    return (
        <div>
            {id}
            <form onSubmit={updateProfile}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="name"
                        name='name'
                        maxRows={4}
                        value={data.name || ''}
                        onChange={handleChange}
                    />
                    <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        name="upload_photo"
                        accept='image/*'
                        type="file"
                        onChange={upload_photo}
                    />
                    <br />
                    <Box   component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                  value={data?.gender || ''}
                                name='gender'
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value='Male'>Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Button type='submit'>submit</Button>
            </form>
        </div>
    );
};

export default UpdateProfile;