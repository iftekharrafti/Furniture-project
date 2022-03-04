import React from 'react';
import useAuth from '../../hooks/useAuth';

const LogOut = () => {
    const {logOut} = useAuth()
    return (
        <div>
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default LogOut;