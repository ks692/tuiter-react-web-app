import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 ">
                    <input class="bg-gray form-control rounded-pill" placeholder="Search Twitter" type="search"   />
                </div>
                <div class="col-1">
                    <i class="fa fa-cog wd-icon-color fa-2x mt-1"></i>
                </div>
            </div>
           <div>
                <ul class="nav nav-tabs my-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-sm-none d-xl-block d-lg-block d-md-block d-xxl-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
              <div class="card">
                <div class="position-relative mb-2">
                    <img class="w-100" src="../../images/SpaceX.jpeg"/>
                    <h1 class="position-absolute text-white bottom-0 left-0 ps-2">SpaceX's Starship</h1>
                </div>
                <div class="px-0 py-0">
                    ${PostSummaryList()}
                </div>
              </div>
           
    `);
}
export default ExploreComponent;
