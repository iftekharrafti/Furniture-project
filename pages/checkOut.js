import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router'

const CheckOut = () => {
    const {user} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!user.email) {
            router.push('/signIn')
        }
    }, [user, router]);


    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default CheckOut;