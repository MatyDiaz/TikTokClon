import SongTicker from "../SongTicker/SongTicker"
import AlbumCover from "./AlbumCover"
import style from './VideoDescription.module.css'

export default function VideoDescription ({author, description, albumCover, songTitle}) {
    return (
        <footer className={style.description}>
            <div className={style.textWrapper} >
                <strong>
                    <a className={style.author} href={`/user/${author}`}>
                        @{author}
                    </a>
                </strong>
                <p className={style.text} >
                    {description}
                </p>
                <SongTicker songTitle={songTitle}/>
            </div>
            <div>
                <AlbumCover albumCover={albumCover}/>
            </div>
        </footer>

    )
}