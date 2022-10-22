const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
                    <div class="row">
                        <div class="col-3">
                            <img class=" rounded-circle w-100 h-100" src=${who.avatarIcon}>
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <div class="wd-text-responsive   fw-bold">
                                    ${who.userName} <i class="wd-my-icon fas fa-check-circle"></i>
                                </div>
                            </div>
                            <div class=" wd-text-responsive row px-0 ">
                            <span>@${who.companyHandle}</span>
                                
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary w-100 mt-1 rounded-pill">
                                Follow
                            </button>
                        </div>
                    </div>
                </li>`
    );
}
export default WhoToFollowListItem;