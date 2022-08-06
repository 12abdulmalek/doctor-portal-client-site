import { useEffect, useState } from "react";
import { loadFromLocalstorage, uploadToLocalStorage } from "../utils/handleLocalhost";
const useHooks = () => {

  const [value, setValue] = useState(new Date());
  const [token, setToken] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
 

const userData = ( userType,e,navigate ) => {
  setIsLoading(true);
  setAuthError('');
 
  console.log(userType);
  const url = `http://localhost:5000/${userType}`;
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(e)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.accessToken) {
        setToken(data)
        uploadToLocalStorage(data);
        loadFromLocalstorage(data);
        setIsLoading(false);
        navigate('/');
      }
      setAuthError(data.msg);
      setIsLoading(false);
    })
    .catch(err=>{
      setIsLoading(false);
    })
}

return {
  value,
  setValue,
  userData,
  token,
  setToken,
  isLoading,
  authError,
  setAuthError,
}
};

export default useHooks;