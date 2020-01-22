(() => {
    // target one thing
    const mainMenu = document.querySelector('#main');
    const secondaryMenu = document.getElementById('secondary');

    // target many things
    const listItems = document.getElementsByTagName('li');

    // Use **destructuring** to convert it to an Array,
    // so we can use the array methods that we know and love
    const listArray = [...listItems];

    // same thing on one line
    // const listArray = [...document.getElementsByTagName('li')]

    const myArr = ['blah', 'blorp', 'bloopy'];
    
    console.dir(listArray.map(li => {
        li.innerText = 'blarrrrr';
        return li;
    }));
    
    console.dir(myArr.map(el => el.toUpperCase()));

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
