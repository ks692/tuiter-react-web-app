import NavigationSidebar from "./index.js";

function exploreComponent() {
    $('#wd-explore').append(`
       ${NavigationSidebar()}
   `);
}

$(exploreComponent);