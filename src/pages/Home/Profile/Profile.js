import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/profile/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [id])
    return (
        <div>
              <img src={`data:image/*;base64,${data.bufferImage}`} alt='' />
             <h1> name : {data.name}</h1>
             <h1> gender : {data.gender}</h1>
        </div>
    );
};

export default Profile;