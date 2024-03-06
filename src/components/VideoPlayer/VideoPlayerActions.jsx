import { Heart } from "../Icons/Heart";
import { Comment } from "../Icons/Comment";
import { Share } from "../Icons/Share";
import { RedButton } from "../Icons/RedButton";
import style from './VideoPlayer.module.css';

export default function VideoPlayerActions ({likes = 12, comments = 35, shares = 25, username, avatar}) {

    const handleLike = () => {
        alert('Like!')
    };
    const handleComment = () => {
        alert('Comment!')
    };
    const handleShare = () => {
        alert('Share!')
    };

    //console.log(avatar);

    return (
        <aside className={style.actions}>
            <div className={style.user}>
                <img alt={username} src={avatar}/>
                <RedButton/>
            </div>

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