import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const user = useLoaderData();

    const {name, email, phone, username, website} = user;
    return (
        <div>
            <h2>Details about user</h2>
            <div className='user-details'>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Username: {username}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default UserDetails;