import { useEffect, useState } from "react"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import style from './FeedVideos.module.css'
import {getVideos} from '../../services/index.js'


// const videos = [
//     {
//         id: 1,
//         author: 'Ruziotaku',
//         description: 'Nada mas relajante que deslizarme con mi tabla sin pensar en nada #skate # lifestyle # urbansports',
//         likes: '500',
//         shares: '256',
//         comments: '333',
//         songTitle:'Original Sound - zzerok1',
//         // albumCover:'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/284edddd2f3745dc9f655448ecd8a39c~c5_100x100.jpeg',
//         albumCover:'../../../assets/SkateAlbum.jpeg',
//         src: '../../../assets/pexels_videos_2791956 (2160p).mp4'
//     },
//     {
//         id: 2,
//         author: 'ArtBoos',
//         description: 'Una muestra de lo que son mis mananas, siempre arranco con estudios de la figura humana. #art #drawing #wellness',
//         likes: '390',
//         shares: '125',
//         comments: '112',
//         songTitle:'Luis Alberto Spinetta - Cancion para los dias de la vida',
//         // albumCover:'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e534e121316f07c53d1d3ed63d505000.jpeg?lk3s=a5d48078&x-expires=1704549600&x-signature=2EM0%2Bj7nq3NVZQYEKs3Ih8%2B5IiE%3D',
//         albumCover: '../../../assets/ArtAlbum.jpeg',
//         src:'../../../assets/production_id_3804810 (2160p).mp4'
//     },
//     {
//         id: 3,
//         author: 'DanaRay',
//         description: 'Lo que me hace feliz se convirtio en mi trabajo, que mas se puede pedir? #nailart #beauty #fashion',
//         likes: '963',
//         shares: '450',
//         comments: '25',
//         songTitle:'DuaLipa - Happy Horse Song',
//         // albumCover:'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/28f10ce782e673d0a644582d61431b45~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704546000&x-signature=Kuu%2FOezFDNZOZ0piUrq0rte07y0%3D',
//         albumCover: '../../../assets/RobleisAlbum.jpeg',
//         src:'../../../assets/production_id_3997798 (2160p).mp4'
//     }
// ]
export default function FeedVideos () {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        getVideos().then(([error, videos])=>{
            //console.log(videos);
            if(error) return setError(error)
            setVideos(videos);
        })
    },[])

    if(error) return(
        <span>{error}</span>
    )

    return (
       videos.map(video=>{
        const {users} = video;
        return (
            <div key={video.id} className={style.item} >
                <VideoPlayer {...video} username={users.username} avatar={users.avatar}/>
            </div>
        ) 
        }) 
    )
}
