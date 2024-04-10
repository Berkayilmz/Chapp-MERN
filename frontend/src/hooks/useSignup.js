import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const useSignup = () => {
    const [loading, setLoading] = useState();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const succes = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
        if (!succes) return;

        setLoading(true);
        try {

            const newUser = {
                fullName,
                userName,
                password,
                confirmPassword,
                gender,
            }

            // const res = await fetch('/api/auth/signup', {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
            // })

            const res=axios.post('http://localhost:3000/api/auth/signup',newUser, {headers:{"Content-Type" : "application/json"}})

            const data= await res.json();
            console.log(data);

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields!'); return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match!'); return false;
    }

    if (password.length < 6) {
        toast.error('Password must e at least 6 characters!'); return false;
    }

    return true;
}