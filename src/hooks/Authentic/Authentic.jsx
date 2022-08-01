import useAuth from "../useAuth";

const useAuthentic = () => {
     const {setItems} = useAuth();
     const token = localStorage.getItem('token');
     setItems(token);
     console.log(token);
   
};

export default useAuthentic;