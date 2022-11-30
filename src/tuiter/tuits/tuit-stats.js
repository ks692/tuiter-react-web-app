import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import "./index.css";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    let isLiked=tuit.liked
    return(
        <div className="row">
            <div className="col-2"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number text-secondary">{tuit.comments}</span></a></div>
            <div className="col-2"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number text-secondary">{tuit.retweets}</span></a></div>
            <div className="col-3">
                <div>
                Likes: {tuit.likes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1}))} className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
            </div>
            <div className="col-3">
                <div>
                    Dislikes: {tuit.dislikes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1}))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                </div>
            </div>

            <div className="col-2"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faShare} /> <span className="number text-secondary"></span></a></div>
        </div>
    );

}

export default TuitStats;



