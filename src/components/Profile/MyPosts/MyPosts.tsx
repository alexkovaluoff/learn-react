import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello world!', likes: '12'},
        {id: 1, message: 'Aboba', likes: '228'}
    ];

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
                    <Post message={postsData[0].message} likes={postsData[0].likes} />
                    <Post message={postsData[1].message} likes={postsData[1].likes} />
                </div>
            </div>
    );
};

export default MyPosts;