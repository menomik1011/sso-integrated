import { useEffect, useState } from 'react';
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
  const [user, setUser] = useState({})
  return (
    <div className='login-form'>
      <GoogleLoginBtn user={user} setUser={setUser} />
    </div>
  );
}

export default App;
