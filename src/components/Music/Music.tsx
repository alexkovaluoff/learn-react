import React from "react";
import classes from "./Music.module.css";

const Music = (props: any) => {
    return (
        <div>
            <div>
                <iframe className={classes.playerYandexStyle} frameBorder="0" src="https://music.yandex.ru/iframe/#track/93390818/18809983"/>
            </div>
            <div>
                <iframe className={classes.playerSCStyle} frameBorder='0' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196364361&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        </div>
    )
}

export default Music;