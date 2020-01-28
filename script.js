(() => {
    // 1. identify which element will emit the event (what are we detecting?)
    const buttons = [...document.querySelectorAll('[role=button]')];

    // 2. define the handler function (what code should run when the event happens?)
    const setLoadState = function() {

        // target the thing we want to change (the same div that got clicked)
        const square = this;
        console.log('ES5 function expression');
        console.log(this);

        const squareClasses = [...square.classList];
        console.log('includes success?',  squareClasses.includes('success'));

        // check which class it has and replace it with the other one
        // (for this example, assume it just has one class)

        // console.log('before:', square.className);

        if (squareClasses.includes('success')) {
            square.classList.replace('success', 'error');
        } else {
            square.classList.replace('error', 'success');
        }

        // console.log('after:', square.className);
        
        // TODO: consider using the toggle method instead?
    };

    // 3. attach the handler to the element
    buttons.forEach(button => {
        button.addEventListener('click', setLoadState, false);
    });
})();
