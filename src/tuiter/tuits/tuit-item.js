import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="px-3 py-2 border">
            <div className="row">
                <div className="col-2">
                    <img  height={58} className="border rounded-circle w-100" src={tuit.image}></img>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="row d-inline-block">
                        <span className="fw-bold ">{tuit.userName}<FontAwesomeIcon className="text-primary ms-1" icon={faCircleCheck}/></span>
                        <span className=" wd-text-responsive  px-0 text-secondary">@{tuit.userHandle} .{tuit.time}</span>
                    </div>
                    <div className="row">
                        <span>{tuit.tuit}</span>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>


        </div>
    );

}

export default TuitItem;