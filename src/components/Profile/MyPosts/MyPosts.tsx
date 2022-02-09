import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={classes.item}>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Add post</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
                <div className={classes.posts}>
                    <Post message='Hello world!' likes='12' />
                    <Post message='Aboba' likes='228'/>
                </div>
            </div>
    );
};

export default MyPosts;