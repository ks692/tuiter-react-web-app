import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {
    return (`
         <div class="px-0">
                ${
            posts.map(item=>{
                return(PostSummaryItem(item))
            }).join('')
        }
        </div>`
    );};

export default PostSummaryList;