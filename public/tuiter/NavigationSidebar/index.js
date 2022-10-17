const NavigationSidebar = (active) => {
    let text= `<div class="col col-xl-12 col-lg-6 col-sm-12 col-md-12 col-xxl-12">
            <ul class="list-group">
                <li class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </li>`
                if(active=='home'){
                    text=text+`<li class="list-group-item active">
                        <i class="fa fa-home"></i>
                        <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block "><a  class="wd-no-dex"href="../HomeScreen/index.html">Home</a></span>
                    </li>`
                }
                else{
                    text=text+`<li class="list-group-item">
                        <i class="fa fa-home"></i>
                        <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block "><a  class="wd-no-dex"href="../HomeScreen/index.html">Home</a></span>
                    </li>`
                }
                if(active=='explore'){
                    text=text+`<li class="list-group-item active">
                        <i class="fa fa-hashtag"></i>
                        <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block "><a  class="wd-no-dex"href="../ExploreScreen/index.html">Explore</a></span>
                    </li>`
                }
                else{
                text=text+`<li class="list-group-item">
                    <i class="fa fa-hashtag"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block "><a  class="wd-no-dex"href="../ExploreScreen/index.html">Explore</a></span>
                </li>`
                }
                text=text+`<li class="list-group-item">
                    <i class="fa fa-bell"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">Notifications</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-envelope"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">Messages</span>
                </li>
                <li class="list-group-item">
                    <i class="fa fa-bookmark"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">Bookmarks</span>
                </li>
                <li class="list-group-item ">
                    <i class="fa fa-list"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">Lists</span>
                </li>
                <li class="list-group-item ">
                    <i class="fa fa-user"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">Profile</span>
                </li>
                <li class="list-group-item ">
                    <i class="fa fa-minus-circle"></i>
                    <span class="text-wrap d-none d-xxl-inline-block d-xl-inline-block ">More</span>
                </li>
            </ul>
        </div>`
        return text
}
export default NavigationSidebar;



