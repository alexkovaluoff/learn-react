import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/n6mvwqA852I"
                    title="YouTube video player" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <div>
                <img src='https://memepedia.ru/wp-content/uploads/2021/02/aboba-glad-valakas.jpg' height={120}/>
                description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;