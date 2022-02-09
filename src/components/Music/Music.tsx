import React from "react";
import classes from "./Music.module.css";

const Music = (props: any) => {
    return (
        <div>
            <iframe className={classes.playerStyle} frameBorder="0" src="https://music.yandex.ru/iframe/#track/93390818/18809983">Слушайте <a
                href='https://music.yandex.ru/album/18809983/track/93390818'>МАЛИНОВАЯ ЛАДА</a> — <a
                href='https://music.yandex.ru/artist/6229247'>GAYAZOV$ BROTHER$</a> на Яндекс.Музыке
            </iframe>
        </div>
    )
}

export default Music;