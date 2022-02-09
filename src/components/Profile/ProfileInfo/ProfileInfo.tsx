import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
    return (
        <div className={classes.profileInfo}>
            <iframe className={classes.profileInfoHeaderVideo} src="https://www.youtube.com/embed/n6mvwqA852I" frameBorder="0"/>
            <div>
                <img className={classes.avatar} src='https://memepedia.ru/wp-content/uploads/2021/02/aboba-glad-valakas.jpg'/>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;