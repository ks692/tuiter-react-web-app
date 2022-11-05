import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faHeart, faUpload, faCircleCheck,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import "./index.css";


const PostItem = ({post}) => {
    let hasImage=true;
    let hasContent=true;
    if (post.image === "") {
        hasImage = false;
    }
    if (post.contentSummary === "") {
        hasContent = false;
    }
return(
    <div className="px-3 py-2">
        <div className="row">
            <div className="col-2">
                <img className="w-100 h-100 wd-rounded-complete rounded-circle" src={post.userImage}></img>
            </div>
            <div className="col-8">
                <div className="row d-inline-block">
                    <span className="fw-bold ">{post.userName}<FontAwesomeIcon className="text-primary ms-1" icon={faCircleCheck}/></span>
                    <span className=" wd-text-responsive  px-0 text-secondary">@{post.userHandle} .{post.time}</span>
                </div>
                <div className="row">
                    <span>{post.title}</span>
                </div>
            </div>
            <div className="col-2 position-relative">
                <div className="position-absolute top-0 end-0">
                <FontAwesomeIcon icon={faEllipsisH}/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
            </div>
            <div className="col-10">
                <div className="card">
                    {hasImage &&
                        <div className="position-relative">
                            <img className="w-100 wd-rounded2" src={post.image}></img>
                        </div>
                    }
                    {hasContent &&
                        <div className="card-body">
                            <div>
                                <p className="mb-0 fw-bold  ">{post.contentTitle}</p>
                                <span className="text-gray wd-text-responsive">{post.contentSummary}
                                </span>
                                <p className="mb-0"><i className="fa fa-link"></i>{post.link}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="row">
                    <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><i className="bi bi-chat"></i> <span className="number text-secondary">{post.comments}</span></a></div>
                    <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faRetweet} /> <span className="number text-secondary">{post.retweets}</span></a></div>
                    <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faHeart} /> <span className="number text-secondary">{post.likes}</span></a></div>
                    <div className="col-3"><a className="text-secondary" style={{"textDecoration": "none"}} href="#"><FontAwesomeIcon icon={faUpload} /> <span className="number text-secondary"></span></a></div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
);

}

export default PostItem;

