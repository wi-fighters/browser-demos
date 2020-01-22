(() => {
    // target the ul
    const mainMenu = document.querySelector('ul');
    // give it a blue class
    // mainMenu.className = 'blue';
    const makeBluePink = () => {
        mainMenu.classList.remove('purple');
        mainMenu.classList.add('blue', 'pink-background');
        // mainMenu.classList.add('');
    };

    const makePurple = () => {
        mainMenu.classList.add('purple');
        mainMenu.classList.remove('blue');
        mainMenu.classList.remove('pink-background');
    };

    makeBluePink();
    // makePurple();
})();
