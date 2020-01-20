(() => {
    const pizza = {topping: 'hawaiian'};

    const userTopping = prompt('Which topping would you like?');
    pizza.topping = userTopping;
    console.log(pizza);

    const userInput = confirm('Everyboooody');
    console.log(userInput);

    // window.alert("Backstreet's back");
    alert('Alright!');
})();
