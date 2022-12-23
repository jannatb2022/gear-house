import React from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Config';
import { toast } from 'react-toastify';
import UseAuth from '../UseAuth.jsx/UseAuth';
import UseToken from '../useToken/UseToken';

import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {

  const location = useLocation();
  const locationFrom = location?.state?.from?.pathname || '/'
  const navigate = useNavigate();
  const [currentus] = UseAuth();
  const [token] = UseToken(currentus);

    let errMsg;

console.log(toast);

    if(token){
        navigate(locationFrom, { replace: true })
    }

  const handleCreateAccountForm =(e) => {


      errMsg = ''  
      e.preventDefault();

      const email = e.target.email.value;
    //   console.log(email);
      const pass = e.target.password1.value;
      const pass2 = e.target.password2.value;

      if(pass !== pass2){
        errMsg = 'Both password should be same';
        toast.error('Both password should be same')
        console.log(errMsg);
        return;
      }
      else {
        const create = async() => {
            await createUserWithEmailAndPassword(auth, email, pass)
            // .then((userCredential) => {
            //     //     // Signed in 
            //          const user = userCredential.user;
            //          console.log(user);
                //     // ...
                

                .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        toast.error(errorMessage)
                })
       
        }

        create()
      }


  }

  return (
    <div className="my-5">
            <div className="card max-w-sm mx-auto">
                
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                        <h2 className="text-3xl text-center mb-5">Register</h2>
                        <form onSubmit={handleCreateAccountForm} autoComplete="off">
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputEmail2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="input-custom"
                                    id="exampleInputEmail2"
                                    name="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputPassword2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="input-custom"
                                    name="password1"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                           
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputPassword2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                  Confirm  Password
                                </label>
                                <input
                                    type="password"
                                    className="input-custom"
                                    name="password2"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                           {/* {error ? <p className="text-center text-sm text-red-600 mb-2">{error?.message}</p> : ''}*/}
                           {errMsg ? <p className="text-center text-sm text-red-600 mb-2">{errMsg}</p> : ''}
                           {/* {loading1 || loading ? <LoadingSpinner /> :  */}
                            <button type="submit" className="input-button">
                                Create Account
                            </button>
                            {/* } 

                            {/* <div className="social-login">
                                <SocialLogin />
                            </div> */}

                            <p className="text-gray-800 mt-6 text-center">
                                Already have an account?
                                {/* <Link
                                    to="/login"
                                    className="text-primary pl-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                                > */}
                                    Login
                                {/* </Link> */}
                            </p>
                        </form>
                    </div>
               
            </div>
        </div>
  )
}

export default Register