import React from 'react';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    };

    return (
        <div style={userStyle}>
            id: {id} <br />
            name: {name} <br />
            email: {email} <br />
            phone: {phone} <br />
            <hr />
        </div>
    );
};

export default User;