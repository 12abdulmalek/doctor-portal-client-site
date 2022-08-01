import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
const Service = () => {
    const {_id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter((item)=>item.specialist===_id);
                setData(filter);
            })
    }, []);
    console.log(data);
    return (
        <div>
          
                 {
                    data.map((item)=><h1>{item.name}</h1>)
                 }
        </div>
    );
};

export default Service;