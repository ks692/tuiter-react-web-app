import React from "react";

import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <div className="card">
            {
                tuitsArray.map( tuit => <TuitItem key={tuit.id} tuit={tuit}/>)
            }
        </div>
    );
};
export default TuitList;