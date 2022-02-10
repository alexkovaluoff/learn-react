import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
    return (
        <div className={classes.profileBlock}>
            <div className={classes.profileHeaderImage} >
                <img src='/assets/aboba.png' alt='Profile header pic'/>
            </div>
            <div className={classes.profileInfo}>
                <img className={classes.avatar} src='/assets/avatar.jpg'/>
                Богданчик Сухачёв 12 лет
            </div>
        </div>
    );
};

export default ProfileInfo;