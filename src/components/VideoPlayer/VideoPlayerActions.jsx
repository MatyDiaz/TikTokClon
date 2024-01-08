import { Heart } from "../Icons/Heart";
import style from './VideoPlayer.module.css';

export default function VideoPlayerActions () {
    return (
        <aside className={style.actions}>
            <div className={style.action}>
                <Heart></Heart>
            </div>
            <div className={style.action}>
                <Heart></Heart>
            </div>
            <div className={style.action}>
                <Heart></Heart>
            </div>
        </aside>
    )
}