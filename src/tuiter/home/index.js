import postsArray from './Post-Item/posts.json'
import PostItem from "./Post-Item/index.js";

const HomeComponent = () => {
    return (
        <div className="card">
            {
                postsArray.map(post => <PostItem key={post.user}  post={post}/>)
            }
        </div>
    )
}

export default HomeComponent;