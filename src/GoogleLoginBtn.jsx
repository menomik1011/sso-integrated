import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const GoogleLoginBtn = ({ user, setUser }) => {
    
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setUser(res)
        console.log('success:', res);
    };

    const onFailure = (err) => {
        console.log('failed:', err);
    };

    const logout = (res) => {
        console.log(res);
        setUser({})
    }

    return (
        <>
            {
                Object.keys(user).length===0  ? 
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID
                    }
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> 
                :
                <>
                <img src={user.profileObj.imageUrl} alt=""/>
                <h3>{user.profileObj.name}</h3>
                    <GoogleLogout
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    ></GoogleLogout>
                    </>
            }
        </>
    )
}

export default GoogleLoginBtn