import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, userId, title, body} = post;

    const {postId} = useParams();
    console.log(postId);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='post-details'>
             <p><b>Post details about:</b> {id}</p>
            <p><b>User Id:</b>{userId}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;