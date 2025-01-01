function rollDice(){

    let rolls = [];
    let images = [];
    const numRolls = document.getElementById("numRolls").value;
    const results = document.getElementById("result");
    const dice = document.getElementById("dices");

    for(i = 0; i < numRolls; i++){

        const value = Math.floor(Math.random() * 6) + 1;
        rolls.push(value);
        images.push(`<img src="dice_images/f${value}.png">`)
    }

    results.textContent = `dice: ${rolls.join(', ')}`;
    dice.innerHTML = images.join('');

}

