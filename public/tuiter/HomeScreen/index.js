import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeScreenComponent from "./HomeScreenComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6  text-white">
    <!--<h3>ExploreComponent</h3>-->
    ${HomeScreenComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
    <div class="card">
    ${PostSummaryList()}
    </div>
   </div>
  </div>
   `);
}
$(exploreComponent);