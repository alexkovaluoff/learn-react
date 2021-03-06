import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostElementActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props: any) => {

    let postElements = props.posts
        .map( (p:{id:number, message:string, likes:string}) => <Post key={p.id} message={p.message} likes={p.likes} /> )

    let newPostElement = React.useRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        // @ts-ignore
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = updateNewPostElementActionCreator(text)
        props.dispatch(action)

    };

    return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div className={classes.item}>
                        <div className={classes.textArea}>
                            {/*@ts-ignore*/}
                            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                        </div>
                        <div>
                            <button className={classes.buttonStyle} onClick={addPost}>Add post</button>
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