import { useState, useRef } from 'react';
import src from '../../../assets/pexels_videos_2791956 (2160p).mp4';
import style from './VideoPlayer.module.css';
import  clsx  from 'clsx';
import VideoPlayerActions from './VideoPlayerActions';
import VideoDescription from '../VideoDescription/VideoDescription';

export default function VideoPlayer ({description ,author, albumCover, src}) {

    const [playing, setPlaying] = useState(false);

    const video = useRef(null);

    const handlePlay = () => {
        playing? 
        video.current.pause()
        :video.current.play()

        setPlaying(!playing);
    }

    const playerClassName = clsx (style.player, {
        [style.hidden] : playing
    })

    return (
        <div className={style.wrapper} >
            <video 
                src= {src} 
                controls={false} 
                loop
                className={style.video}
                ref={video}
                onClick={handlePlay} 
            />
            <i className={playerClassName} onClick={handlePlay}  />
            {/* <i className={playing? style.hidden : style.player} onClick={handlePlay}  /> */}
            <VideoPlayerActions/>
            <VideoDescription
                albumCover = {albumCover}
                author = {author}
                description={description}
            />
        </div>
    )
};