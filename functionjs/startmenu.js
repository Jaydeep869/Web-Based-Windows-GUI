document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startMenu = document.querySelector('.start-menu');

    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (startMenu.classList.contains('hidden')) {
            startMenu.classList.remove('hidden');
            startMenu.classList.remove('slide-out');
            startMenu.classList.add('slide-in');
        } else {
            startMenu.classList.add('slide-out');
            startMenu.addEventListener('animationend', () => {
                startMenu.classList.add('hidden');
            }, {once: true});
        }
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.classList.contains('hidden') && 
            !startMenu.contains(e.target) && 
            e.target !== startButton) {
            startMenu.classList.add('slide-out');
            startMenu.addEventListener('animationend', () => {
                startMenu.classList.add('hidden');
            }, {once: true});
        }
    });
});