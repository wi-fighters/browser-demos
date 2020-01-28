(() => {
    // 1. identify which elements will emit the event (what are we detecting?)
    const buttons = [...document.querySelectorAll('[role=button]')];

    // 2. define the handler function (what code should run when the event happens?)
    // USE ES5 (old-school) FUNCTION EXPRESSION SYNTAX WITH EVENT HANDLERS
    // This is so `this` refers to the element that emitted the event.
    // (with arrow syntax, `this` ends up being the Window, which is not helpful)
    const setLoadState = function() {

        // target the thing we want to change (the same div that got clicked)
        const elementThatGotClicked = this;
        // If you're getting unexpected results, try logging `this`
        // console.log(this);

        const buttonClasses = [...elementThatGotClicked.classList];
        console.log('includes success?',  buttonClasses.includes('success'));

        if (buttonClasses.includes('success')) {
            elementThatGotClicked.classList.replace('success', 'error');
        } else {
            elementThatGotClicked.classList.replace('error', 'success');
        }
        
        // TODO: consider using the toggle method instead?
    };

    // 3. attach the handler to the element
    buttons.forEach(button => {
        button.addEventListener('click', setLoadState, false);
    });
})();
