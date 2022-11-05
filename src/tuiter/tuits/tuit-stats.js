import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import "./index.css";


const TuitStats = ({tuit}) => {
    let isLiked=tuit.liked
    return(
        <div className="row">
            <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number text-secondary">{tuit.comments}</span></a></div>
            <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number text-secondary">{tuit.retweets}</span></a></div>
            <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon style={{"color":isLiked?"red":""}} icon={faHeart} /> <span className="number text-secondary">{tuit.likes}</span></a></div>
            <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faShare} /> <span className="number text-secondary"></span></a></div>
        </div>
    );

}

export default TuitStats;



