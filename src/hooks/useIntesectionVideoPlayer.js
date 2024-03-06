import { useEffect, useState } from "react";



let options = {
    root: document.querySelector("main"),
    rootMargin: "0px",
    threshold: 0.9
};

const observer = new window.IntersectionObserver((entries)=>{
    //console.log(e);
    entries
        //.filter(entry=>entry.isIntersecting)
        .forEach(entry=> {
            const {target, isIntersecting} = entry
            target._handleIntersect(isIntersecting)
        })

}, options);


export default function useIntesectionVideoPlayer ({video}) {

    const [playing, setPlaying] = useState(false);

    console.log('useIntersectionVideoPlayer');

    useEffect(()=>{

        if(!video.current) return

        observer. observe(video.current)
        video.current._handleIntersect = (isIntersecting) => {
            //console.log('onIntersect');
            const {current:videoEl} = video
            //console.log(isIntersecting, videoEl, videoEl.paused);

            isIntersecting
                ? videoEl.play()
                : videoEl.pause()
            setPlaying(!videoEl.paused)
        }
    },[video.current]);

    const handlePlay = () => {
        playing? 
        video.current.pause()
        :video.current.play()

        setPlaying(!playing);
    }

    return {
        handlePlay,
        playing
    }
}