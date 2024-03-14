import { useRef } from 'react';
import src from '../../../assets/pexels_videos_2791956 (2160p).mp4';
import style from './VideoPlayer.module.css';
import  clsx  from 'clsx';
import VideoPlayerActions from './VideoPlayerActions';
import VideoDescription from '../VideoDescription/VideoDescription';
import useIntesectionVideoPlayer from '../../hooks/useIntesectionVideoPlayer';


export default function VideoPlayer (props) {
    //console.log(src);
   
    const video = useRef(null);
    
    const {playing, handlePlay} = useIntesectionVideoPlayer({video})


    const playerClassName = clsx (style.player, {
        [style.hidden] : playing
    })

    const {src} = props

    return (
        <div className={style.wrapper} >
            <video 
                src= {src} 
                //src='https://ctinhqqaqmuxapdaxgox.supabase.co/storage/v1/object/public/Videos/uploads/c719d3c6-9eaa-44a4-8aac-1a82e876d775.mp4'
                controls={false} 
                loop
                className={style.video}
                ref={video}
                onClick={handlePlay} 
            />
            <i className={playerClassName} onClick={handlePlay}  />
            {/* <i className={playing? style.hidden : style.player} onClick={handlePlay}  /> */}
            <VideoPlayerActions {...props} />
            <VideoDescription {...props} />
        </div>
    )
};