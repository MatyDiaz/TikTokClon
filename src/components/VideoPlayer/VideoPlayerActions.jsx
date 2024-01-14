import { Heart } from "../Icons/Heart";
import { Comment } from "../Icons/Comment";
import { Share } from "../Icons/Share";
import style from './VideoPlayer.module.css';

export default function VideoPlayerActions ({likes = 12, comments = 35, shares = 25}) {

    const handleLike = () => {
        alert('Like!')
    };
    const handleComment = () => {
        alert('Comment!')
    };
    const handleShare = () => {
        alert('Share!')
    };

    return (
        <aside className={style.actions}>
            <button onClick={handleLike} className={style.action}>
                <Heart/>
                <span title='like' >{likes}</span>
            </button>
            <button onClick={handleComment} className={style.action}>
                <Comment/>
                <span title='comment' >{comments}</span>
            </button>
            <button onClick={handleShare} className={style.action}>
                <Share/>
                <span title='shares' >{shares}</span>
            </button>
        </aside>
    )
}