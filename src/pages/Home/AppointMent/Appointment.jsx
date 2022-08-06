import { Box, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { loadFromLocalstorage } from '../../../utils/handleLocalhost';
import Calender from '../Services/Calender';

const Appointment = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const user = loadFromLocalstorage();
    const [value,setValue] = useState(new Date());
  
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/appointment?search=${user?.email}&date=${value}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [value]);
    return (
        <div>
            <Box sx={{ display: 'flex',justifyContent:'center' }}>
             
            </Box>
        { value.toDateString()}
            <Calender value={value} setValue={setValue}> </Calender>
              <Container>
                {
                    data.map((item, index) => <div key={index}>
                        <div className='doctor-card'>
                            <div className='doctor-card1'>
                                <img src={`data:image/*;base64,${item.imageBuffer}`} alt='' />
                            </div>
                            <div className='doctor-card2'>
                                <h3 className='doctor-name'>{item.name}</h3>
                                <h5 className='education'>{item.education}</h5>
                                <span className='specialist'>specialist</span>
                                <h5 className='specialist'>{item.specialist}</h5>
                            </div>
                            <div className='doctor-card3'>
                                <span className='doctor-name'>work place</span>
                                <h5 className='education'>{item.work_in}</h5>
                                <span className='experience'>experience</span>
                                <h5 className='specialist'>{item.experience}</h5>
                            </div>
                            <div className='doctor-card4'>
                                <h3 className='fee'>{item.fee}</h3>
                                 <span>(incl. VAT)  Per consultation</span>
                                 <br/>
                              
                              <br/>
                            </div>
                        </div>
                    </div>)
                }
            </Container>
            {
                loading  &&  <CircularProgress />
               }
        </div>
    );
};

export default Appointment;