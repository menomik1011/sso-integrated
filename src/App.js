import { useEffect } from 'react';
import './App.css';
import GoogleLoginBtn from './GoogleLoginBtn';

function App() {
  // function handleCallbackResponse(){

  // }
  // useEffect(()=>{
  //   // global google
  //   google.accounts.id.initialize({
  //     client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //     callback:handleCallbackResponse
  //   })
  // },[])
  return (
    <div className='login-form'>
      <GoogleLoginBtn />
    </div>
  );
}

export default App;
