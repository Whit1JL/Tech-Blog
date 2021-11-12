// call function to logout of page

function logout() {
    fetch("/api/user/logout", {
        method: "post",
        headers: { "Content-Type": "application/json" }
    })
        .then(function () {
            document.location.replace("/");
        })
        .catch(err => console.log(err));
}
// added Event Listener 
document.querySelector("#logout-link").addEventListener("click", logout);