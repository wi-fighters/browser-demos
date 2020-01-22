(() => {
    // target one thing
    const mainMenu = document.querySelector('#main');
    const secondaryMenu = document.getElementById('secondary');

    // target many things
    const listItems = document.getElementsByTagName('li'); // we get an HTMLCollection
    console.log('What kind of thing do we get from getElementsByTagName...?');
    console.dir(listItems);
    
    const secondItems = document.getElementsByClassName('second'); // we get an HTMLCollection
    console.log('What kind of thing do we get from getElementsByClassName...?');
    console.dir(secondItems);
    
    const mainListItems = document.querySelectorAll('#main li');
    console.log('What kind of thing do we get from querySelectorAll...?');
    console.dir(mainListItems); // we get a NodeList

    // Use **destructuring** to convert "Array-like things" to an Array,
    // so we can use the array methods that we know and love
    const listArray = [...listItems];
    const mainListItemsArray = [...mainListItems];

    // same thing on one line
    // const listArray = [...document.getElementsByTagName('li')];
    // const mainListItemsArray = [...document.querySelectorAll('#main li')];

    const myArr = ['blah', 'blorp', 'bloopy'];
    
    console.dir(listArray.map(li => {
        li.innerText = 'blarrrrr';
        return li;
    }));

    mainListItemsArray.forEach(li => {
        li.classList.add('bigger');
    });
    
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
