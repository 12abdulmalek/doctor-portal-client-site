import { useEffect, useState } from "react";
const useHooks = () => {
  const [items, setItems] = useState('');
  const authenticationLogin = (e,navigate) => {
    const url = `http://localhost:5000/login`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(e)
    })
      .then(res => res.json())
      .then(data => {

        if(data.accessToken){
          setItems(e.email);
        }
         localStorage.setItem('token',JSON.stringify(data));
        navigate('/')
      })
  }


  return {
    setItems,
    items,
    authenticationLogin
  }
};

export default useHooks;