// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './MakeAdmin.css'

import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    // const { register, handleSubmit, watch, errors } = useForm();

    // const onSubmit = data => {
    //     const eventData = {
    //         email: data.email
    //     };
    //     console.log(eventData);

    //     fetch('http://localhost:5000/makeAdmin', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(eventData)
    //     })
    //         .then(res => {
    //             console.log('server side response', res);

    //         })
    //         .catch(error => {
    //             console.log('Error', error);
    //         })
    // }





    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setEmail('')
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (



        <div>
            <br />
            <br />
            <br />
            <br />
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    placeholder="Input a Email you want to admin"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained bg-success">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;