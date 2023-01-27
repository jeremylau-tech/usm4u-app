import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { React, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

function Login() {

  const auth = getAuth(app);

  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const navigate = useNavigate();

  const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Successfully created an account");
      navigate('/Login')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode);
      // ..
    });
    }

  return (
    <div className='Login'>
      <Navbar />
      {/*<div class="bg-no-repeat bg-cover bg-center relative" style={{ */}
      <div class="bg-no-repeat bg-cover bg-center" style={{ 
        backgroundImage:
          'url("https://scontent-kut2-1.xx.fbcdn.net/v/t39.30808-6/318573914_944913476490944_8042798349385653019_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF4GJKV7kPVC8cUdq-FeTxcQkNyvQ15-TxCQ3K9DXn5PJn_ALTNW4MBM-UEMPexHVOiAy4JJKtHUjQjKM6tboNj&_nc_ohc=TR-lTnnqJNkAX9PPkVl&tn=gtXCMviIUS2xCExU&_nc_ht=scontent-kut2-1.xx&oh=00_AfD898oOyrmKKyIz38RWJCDnIWrlDRqHxGQpyZkcp6qw0A&oe=63C72917&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80")',
        }}>   
        {/*<div class="absolute bg-gradient-to-b from-purple-500 to-purple-400 opacity-20 inset-0 z-0"></div> */}
        <div class="bg-gradient-to-b from-purple-500 to-purple-400 opacity-20 inset-0 z-0"></div>
        <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center gap-12">
          <div class="flex-col hidden lg:flex mt-[130px] py-10 pr-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div class="self-start flex flex-col text-white">
              <h1 class="mb-3 font-bold text-5xl">Welcome To USM4U</h1>
              <p class="pr-3 italic">Your one and only, student application.</p>
            </div>
          </div>
          <div class="flex justify-center self-center z-10 py-10 lg:py-0">
            <div class="px-12 pt-12 pb-6 bg-white mx-auto rounded-3xl w-[450px]">
              <div class="mb-4">
                <h3 class="font-semibold text-2xl text-gray-800">Create Account</h3>
                <p class="text-gray-500">Please fill in your details below.</p>
              </div>
              <div class="space-y-5">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                  <input class=" w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="mail@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="space-y-2">
                  <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="text-center">
                {/* <button onClick={signUp} type="submit" class="w-[180px] justify-center bg-purple-400 hover:bg-purple-500 text-gray-100 mt-2 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">*/}
                <button onClick={signUp} type="submit" class="w-[180px] justify-center bg-purple-400 hover:bg-purple-500 text-gray-100 mt-5 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                  Create Account
                </button>
                <div className='italic text-sm mt-7 mb-4 text-center'>
                  <p>Already have an account?
                    <Link to='/Login' className='text-purple-700 underline pl-1'>Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright © 2022-2023 |
              <a href="https://codepen.io/uidesignhub" rel="" target="blank" title="Ajimon" class="text-green hover:text-green-500 "> USM4U</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login