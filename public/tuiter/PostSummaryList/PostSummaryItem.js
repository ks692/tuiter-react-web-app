const PostSummaryItem = (post) => {
    return(`
     <div class="row pb-1 px-3">
                        <div class="col-10">
                            <div class="row">
                               <p class="text-secondary mx-0 my-0 px-3">${post.topic}</p>
                            </div>
                            <div class="row">
                                <p class="mx-0 my-0 px-3">
                                    <span class="fw-bold">${post.userName}</span>
                                    <i class="fa fa-check-circle px-0"></i>
                                    <span class="text-secondary"> -${post.time}</span>
                                </p>
                            </div>
                            <div class="row">
                                <span class="fw-bold ms-0 px-3">
                                    ${post.title}
                                </span>
                            </div>
                            <div class="row">
                                <span class="text-secondary ms-0 px-3">${post.tweets} Tweets</span>
                            </div>
                        </div>
                        <div class="col-2">
                            <img class="w-100" src=${post.image}>
                        </div>
                    </div>
                    <hr class="mx-0">`
    );
}
export default PostSummaryItem;