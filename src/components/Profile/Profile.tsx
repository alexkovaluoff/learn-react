import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText = {props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;