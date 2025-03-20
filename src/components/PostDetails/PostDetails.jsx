import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, userId, title, body} = post;
    return (
        <div className='post-details'>
             <p><b>ID:</b> {id}</p>
            <p><b>User Id:</b>{userId}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default PostDetails;