(() => {
    // target the ul
    const mainMenu = document.querySelector('#main');
    const secondaryMenu = document.querySelector('#secondary');

    // give it a blue class
    // mainMenu.className = 'blue';
    const styleHeaderMenu = menu => {
        menu.classList.remove('purple');
        menu.classList.add('blue', 'pink-background');
    };

    const styleDrawerMenu = menu => {
        menu.classList.add('purple');
        menu.classList.remove('blue');
        menu.classList.remove('pink-background');
    };

    styleHeaderMenu(secondaryMenu);
    styleDrawerMenu(mainMenu);
})();
