import style from './SongTicker.module.css';
import Marquee from 'react-fast-marquee';

export default function SongTicker ({songTitle}) {
    return (
        <div className={style.song}>
            <div className={style.musicIcon}></div>
            <Marquee>
              {songTitle}
            </Marquee>
        </div>
    )
};