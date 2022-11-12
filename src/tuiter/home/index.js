import postsArray from './Post-Item/posts.json'
import PostItem from "./Post-Item/index.js";


const HomeComponent2 = () => {

    return (
        <div className="card">
            {
                postsArray.map(post => <PostItem key={post.user}  post={post}/>)
            }
        </div>
    )
}

export default HomeComponent2;