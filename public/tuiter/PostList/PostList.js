import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
         <div class="">
                ${
            posts.map(item=>{
                return(PostItem(item))
            }).join('')
        }
        </div>`
    );};

export default PostList;