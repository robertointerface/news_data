import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


 export const googleLogin = () => {
  return(
     <GoogleLogin
         clientId="332181169-0am1ptupubfrdspgu9e973jgbsrbmbeg.apps.googleusercontent.com"
         buttonText="Login"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
     />
  )
 }

const responseGoogle = (response) => {
  console.log(response);
}