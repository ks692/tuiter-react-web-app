import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return (`
             <ul class="list-group">
                <li class="list-group-item fw-bold">
                    Who to follow
                </li>
                ${
                  who.map(item=>{
                    return(WhoToFollowListItem(item))
                  }).join('')
                }
             </ul>`
   ); }

export default WhoToFollowList;