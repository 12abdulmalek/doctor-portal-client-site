import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Profiles = () => {
    const [user,setUser ] = useState([]);
   
    const {items,setItems} = useAuth();
     useEffect(()=>{
          fetch('http://localhost:5000/profile')
          .then(res=>res.json())
          .then(data=>{
               const filter = data.filter((item)=>item.email===items);
            setUser(filter)
        })
    },[items]);

    return (
        <div>
             {
                user.map(item=><div key={item._id}>
                    <h1>{item.name}</h1>
                    <h1>{item.gender}</h1>
                    <img src={`data:image/*;base64,${item.image}`} alt=""/>
                </div>)
             }
        </div> 
    );
};

export default Profiles;