import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <p><b>ID:</b> {id}</p>
            <p><b>Title:</b> {title}</p>
            <p><b>Body:</b> {body}</p>
            <hr />
            <Link to= {`/post/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default Post;