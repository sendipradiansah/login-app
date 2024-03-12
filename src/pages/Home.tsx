import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

    const Home = () => {
    const[userInfo, setUserInfo] = useState('');
    let token: string | null = localStorage.getItem("token");
    // console.log('TOKENN', token);
    let email: string | null = localStorage.getItem("email");
    let navigation = useNavigate();

    const handleLogout = () => {
        console.log('callback');
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigation('/');
    };

    useEffect(() => {
        if(token == null){
            navigation('/');
        }
    }, [token]);

    const showEmail = useMemo(() => {
        return email;
    },[email])
  
  return (
    <div className="md:flex justify-center mt-20">
        <div className="flex-1 items-center mr-5">
            <h3 className="text-center text-grey-700 text-lg">Hi... <span className="text-blue-400 text-lg">{showEmail}</span></h3>
        </div>
        <div className="mr-20">
            <button type="button" onClick={handleLogout} className="bg-blue-500 hover:bg-blue-800 px-10 h-10 text-white font-bold py-2 px-4 rounded focus:outline-none">Logout</button>
        </div>
    </div>
  )
}

export default Home;
