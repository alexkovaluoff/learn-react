import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
    return (
        <div className={classes.profileBlock}>
            <div className={classes.profileHeaderImage} >
                <img  src='/assets/aboba.png' alt='Aboba'/>
            </div>
            <div className={classes.profileInfo}>
                <img className={classes.avatar} src='https://memepedia.ru/wp-content/uploads/2021/02/aboba-glad-valakas.jpg'/>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;