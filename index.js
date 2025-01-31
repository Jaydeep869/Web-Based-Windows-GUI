document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".icon").forEach(icon => {
        icon.addEventListener("dblclick", function () {
            const app = icon.getAttribute("data-app");

            new WinBox({
                title: app.replace("-", " ").toUpperCase(),
                width: "400px",
                height: "300px",
                x: "center",
                y: "center",
                url: `apps/${app}.html`
            });
        });
    });
    document.querySelectorAll(".menu-item").forEach(menuitem => {
        menuitem.addEventListener("click", function () {
            const app = menuitem.getAttribute("data-app");

            new WinBox({
                title: app.replace("-", " ").toUpperCase(),
                width: "400px",
                height: "300px",
                x: "center",
                y: "center",
                url: `apps/${app}.html`
            });
        });
    });


    const contextMenu = document.getElementById("context-menu");
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.classList.remove("hidden");
    });

    document.addEventListener("click", function () {
        contextMenu.classList.add("hidden");
    });
    
});

function refreshDesktop() {
    location.reload(); 
}

function createNewFile() {
    alert("New file created!");
}
function Themes() {
    const app = document.querySelector(".WinThemes").getAttribute("data-app");

            new WinBox({
                title: app.replace("-", " ").toUpperCase(),
                width: "400px",
                height: "300px",
                x: "center",
                y: "center",
                url: `apps/${app}.html`
            });
}

