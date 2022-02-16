import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;