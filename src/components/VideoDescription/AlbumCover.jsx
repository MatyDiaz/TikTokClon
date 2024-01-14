import style from './VideoDescription.module.css';

export default function AlbumCover ({albumCover}) {
    return (
        <div className={style.album}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 49" width="32px" height="32px" className="css-16zhvva-StyledIconAlbum e365p2r14"><path fill="url(#a)" fillRule="evenodd" d="M24.5 49a24.5 24.5 0 1 0 0-49 24.5 24.5 0 0 0 0 49z" clipRule="evenodd"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(24.5 0 0 24.5 24.5 24.5)" gradientUnits="userSpaceOnUse"><stop offset=".1" stopColor="#151515"/><stop offset=".4" stopColor="#393939"/><stop offset=".6" stopColor="#161616"/><stop offset=".9" stopColor="#393939"/></radialGradient></defs></svg> */}
            <img className={style.albumImage} src={albumCover}/>
        </div>
    )
}