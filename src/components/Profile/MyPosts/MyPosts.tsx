import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello world!', likes: '12'},
        {id: 1, message: 'Aboba', likes: '228'}
    ];

    let postElement = postsData
        .map( post => <Post message={post.message} likes={post.likes} /> )

    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={classes.item}>
                        <div className={classes.textArea}>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button className={classes.buttonStyle}>Add post</button>
                            <button className={classes.buttonStyle}>Cancel</button>
                        </div>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>
            </div>
    );
};

export default MyPosts;