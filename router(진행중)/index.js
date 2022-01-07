const selectTab = function(id) {
    // Remove selected class from all buttons
    const route = document.querySelectorAll(".route");
    route.forEach(item => item.classList.remove("selected"));

    // select clicked element (visually)
    const ids = document.querySelectorAll("#" + id);
    ids.forEach(item => item.classList.add("selected"));
}
const loadContent = function(id) {
    console.log("Loading content for {" + id + "}");
    // Update text "Content loading for {id}..."
    // Here you would do content loading magic...
    // Perhaps run Fetch API to update resources
    const content = document.querySelector(".content");
    content.innerHTML = 'Content loading for /' + id + '...';
}

const push = function(event) {
    // Get id attribute of the button or link clicked
    let id = event.target.id;
    // Visually select the clicked button/tab/box
    selectTab(id);
    // Update Title in Window's Tab
    document.title = id;
    // Load content for this tab/page
    loadContent(id);
    // Finally push state change to the address bar
    window.history.pushState({id}, `${id}`, `/page/${id}`);
    console.log("pushState");
}

window.onload = event => {
    // Add history push() event when boxes are clicked
    window["home"].addEventListener("click", event => push(event));
    window["about"].addEventListener("click", event => push(event));
    window["gallery"].addEventListener("click", event => push(event));
    window["contact"].addEventListener("click", event => push(event));
    window["help"].addEventListener("click", event => push(event));
}

// Listen for PopStateEvent
// (Back or Forward buttons are clicked)
window.addEventListener("popstate", event => {
    console.log("here");
    // Grab the history state id
    console.log(event.state)
    let stateId = event.state.id;
    // Show clicked id in console (just for fun)
    console.log("stateId = ", stateId);
    // Visually select the clicked button/tab/box
    selectTab(stateId);
    // Load content for this tab/page
    loadContent(stateId);
});