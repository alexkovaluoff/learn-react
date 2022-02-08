import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.content}>
                My posts
                <div>
                    <div className={classes.item}>
                        <textarea></textarea>
                        <div>
                            <button>Add post</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
                <Post message='Hello world!' likes='12' />
                <Post message='Aboba' likes='228'/>
            </div>
    );
};

export default MyPosts;