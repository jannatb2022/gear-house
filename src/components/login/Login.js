import React, { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../Config/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import UseToken from '../useToken/UseToken';
import UseAuth from '../UseAuth.jsx/UseAuth';


const Login = () => {

  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const navigate = useNavigate();
  
  const [currentus] = UseAuth();
  const [token] = UseToken(currentus);
  let errorMsg;
  const emailRef = useRef();

  if(token){
    navigate (from, {replace: true});
  }


  const handleLoginForm = (e) =>{
    errorMsg = ''
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const sendMail = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        
      } 
      catch (error) {
        console.log(error);
      }
        

        
    }
    sendMail();

    
  }

  const handleForgetPassword = (e) => {
    const email = emailRef.current.value;
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(!email){
      toast.error("Please Enter email and Click Forgtt Password", { position: "top-center" });
      console.log('wriite your email');
    }
    else if (email.match(regex)){
      const sentMail = async() => {
        try {
          await sendPasswordResetEmail(auth, email)
          console.log('email sent');
          
      } 
      catch (e) {
        console.log(e);
      }
      }
      sentMail()
      

    }
    else{
      console.log('write perfect email');
    }

  }
  
  return (
    <div className="my-5">
      <div className="card max-w-sm mx-auto">
        
          <div className="block p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl text-center mb-5">Login</h2>
            <form onSubmit={handleLoginForm} autoComplete="off">
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail2"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Email address
                </label>
                <input
                  ref={emailRef}
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
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              {/* {error ? <p className="text-center text-red-600 text-md mb-2">{error?.message}</p> : ''} */}
              

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  onClick={handleForgetPassword}
                  to="#"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </div>

              {/* {loading1 ? <LoadingSpinner /> : */}
              <button type="submit" className="input-button"> 
                Sign in
              </button>


              {/* <div className="social-login">
                <SocialLogin />
              </div> */}

              <p className="text-gray-800 mt-6 text-center">
                Not a member?
                <Link
                  to="/registration"
                  className="text-primary pl-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        
      </div>
    </div>
  )
}

export default Login