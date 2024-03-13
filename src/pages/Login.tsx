import React, { useCallback, useState, useMemo} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[msgEmail, setMsgEmail] = useState('');
  const[msgPassword, setMsgPassword] = useState('');
  const[loading, setLoading] = useState(false);
  const[info, setInfo] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setEmail(email);
    setPassword(password);
    setInfo('');
    console.log(email);
    console.log(password);

    let validEmail = false;
    let validPassword = false;

    if (!email) {
        setMsgEmail('Required');
        validEmail = false;
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setMsgEmail('Invalid email address');
        validEmail = false;
    }else{
        setMsgEmail('');
        validEmail = true;
    }

    if(!password) {
        setMsgPassword('Required');
        validPassword = false;
    }else{
        setMsgPassword('');
        validPassword = true;
    }

    if(validEmail == true && validPassword == true){
        setLoading(true);
        await axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).
        then(function(response){
            console.log('ress' + response.data.token);
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
            navigate('/home');
        }).
        catch(function(error){
            console.log(error.message);
            setLoading(false);
            setInfo('Email or Password is not valid!');
        });
    }
}

const handleChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
    setMsgEmail('');
    setInfo('');
},[]);

const handleChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
    setMsgPassword('');
    setInfo('');
}, []);


  return (
    <div>
        <h3 className="text-center mb-4 mt-10 text-gray-bold text-lg ">Form Login</h3>
        <div className="md:flex md:justify-center mt-10">
            <form onSubmit={(e: any) => handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4">
                {
                    loading ?
                    <div className="w-full mb-4">
                        <svg aria-hidden="true" className="inline w-full h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                    : 
                    null
                }
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="text" id="email" className="shadow appearance-none border w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" placeholder="Email" value={email} onChange={handleChangeEmail}/>
                    <label className="block text-sm font-bold mb-5 text-[#f43f5e]">{msgEmail !== '' ? msgEmail : null}</label>
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" id="password" type="password" placeholder="Password" value={password} onChange={handleChangePassword}/>
                    <label className="block text-sm font-bold mb-5 text-[#f43f5e]">{msgPassword !== '' ? msgPassword : null}</label>
                </div>
                {info ? <div className="mb-8 text-red-500 text-sm">{info}</div> : null}
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;
