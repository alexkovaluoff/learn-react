import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postElements = props.posts
        .map( (p:{id:number, message:string, likes:string}) => <Post key={p.id} message={p.message} likes={p.likes} /> )

    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={classes.item}>
                        <div className={classes.textArea}>
                            <textarea defaultValue="What's up?!"></textarea>
                        </div>
                        <div>
                            <button className={classes.buttonStyle}>Add post</button>
                            <button className={classes.buttonStyle}>Cancel</button>
                        </div>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElements}
                </div>
            </div>
    );
};

export default MyPosts;