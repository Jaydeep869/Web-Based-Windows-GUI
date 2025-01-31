document.addEventListener("DOMContentLoaded", function () {
    const wallpaperInput = document.getElementById("wallpaperInput");
    const desktop = document.getElementById("desktop");

    // Load wallpaper from local storage
    const savedWallpaper = localStorage.getItem("wallpaper");
    if (savedWallpaper) {
        desktop.style.backgroundImage = `url(${savedWallpaper})`;
    }

    // Change wallpaper
    wallpaperInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                desktop.style.backgroundImage = `url(${imageUrl})`;
                localStorage.setItem("wallpaper", imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });
});
