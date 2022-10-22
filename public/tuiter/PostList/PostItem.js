const PostItem = (post) => {
    return(`
     <div >
            <div class="row">
                <div class="col-2">
                    <img class="w-100 h-100 wd-rounded-complete rounded-circle" src="${post.userImage}">
                </div>
                <div class="col-8">
                    <div class="row d-inline-block">
                        <span class="fw-bold ">${post.userName}<i class="wd-my-icon fas fa-check-circle"></i></span>
                        <span class=" wd-text-responsive  px-0 text-secondary">@${post.userHandle} .${post.time}</span>
                    </div>
                    <div class="row">
                        <span>${post.title}</span>
                    </div>
                </div>
                <div class="col-2 position-relative">
                    <i class="fa fa-ellipsis-h position-absolute top-0 end-0"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-2">
                </div>
                <div class="col-10">
                    <div class="card">
                        <div class="position-relative">
                            <img class="w-100" src=${post.image}>
                        </div>
                        <div class="card-body">
                            <div>
                                <p class="mb-0 fw-bold  ">${post.contentTitle}</p>
                                <span class="text-gray wd-text-responsive">${post.contentSummary}
                                </span>
                                <p class="mb-0"><i class="fa fa-link"></i>${post.link}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3"><i class="fa fa-comment"></i>&nbsp; ${post.comments}</div>
                        <div class="col-3"><i class="fa fa-retweet"></i>&nbsp; ${post.retweets}</div>
                        <div class="col-3"><i class="fa fa-heart"></i>&nbsp; ${post.likes}</div>
                        <div class="col-3"><i class="fa fa-upload"></i>&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
        <hr>`

    );
}
export default PostItem;