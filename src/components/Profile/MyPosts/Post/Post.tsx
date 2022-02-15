import React from 'react';
import classes from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={classes.item}>
            <img src='/assets/postava.png'/>
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