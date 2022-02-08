import React from 'react';
import classes from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png'/>
            {props.message}
           <div>
               <span>
                   <button>
                       {props.likes} likes!
                   </button>
               </span>
           </div>
        </div>
    );
};

export default Post;