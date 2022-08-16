import { useState } from 'react';
import './App.css';
import GoogleLoginBtn from './GoogleLoginBtn';

function App() {
  const [user, setUser] = useState({})
  return (
    <div className='login-form'>
      <GoogleLoginBtn user={user} setUser={setUser} />
    </div>
  );
}

export default App;
