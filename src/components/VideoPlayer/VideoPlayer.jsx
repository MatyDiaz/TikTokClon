import { useRef } from 'react';
import src from '../../../assets/pexels_videos_2791956 (2160p).mp4';
import style from './VideoPlayer.module.css';
import  clsx  from 'clsx';
import VideoPlayerActions from './VideoPlayerActions';
import VideoDescription from '../VideoDescription/VideoDescription';
import useIntesectionVideoPlayer from '../../hooks/useIntesectionVideoPlayer';


export default function VideoPlayer ({description ,username, avatar, albumCover, src, songTitle}) {
    //console.log(src);
   
    const video = useRef(null);
    
    const {playing, handlePlay} = useIntesectionVideoPlayer({video})


    const playerClassName = clsx (style.player, {
        [style.hidden] : playing
    })

    return (
        <div className={style.wrapper} >
            <video 
                src= {src} 
                //src='https://www.pexels.com/video/2499611/'
                controls={false} 
                loop
                className={style.video}
                ref={video}
                onClick={handlePlay} 
            />
            <i className={playerClassName} onClick={handlePlay}  />
            {/* <i className={playing? style.hidden : style.player} onClick={handlePlay}  /> */}
            <VideoPlayerActions
                username={username}
                avatar={avatar}
            />
            <VideoDescription
                albumCover = {albumCover}
                username = {username}
                description={description}
                songTitle={songTitle}
            />
        </div>
    )
};