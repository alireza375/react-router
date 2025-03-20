import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p><b>ID:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
            <hr />
            {/* <Link to= {`/post/${id}`}>
                <button>Click Me</button>
            </Link> */}

            <button onClick={handleShowDetails}>See details </button>

        </div>
    );
};

export default Post;