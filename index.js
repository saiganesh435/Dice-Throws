document.getElementById('roll').addEventListener('click', function() {
    const member1 = document.getElementById('member-1');
    const member2 = document.getElementById('member-2');
    const member3 = document.getElementById('member-3');
    const winnerDiv = document.getElementById('winner');

    // Roll the dice for each member
    const roll1 = getRandomNumber();
    const roll2 = getRandomNumber();
    const roll3 = getRandomNumber();

    // Update the dice divs with the rolled numbers
    member1.textContent = roll1;
    member2.textContent = roll2;
    member3.textContent = roll3;

    // Determine the winner
    const rolls = [roll1, roll2, roll3];
    const maxRoll = Math.max(...rolls);
    const minRoll = Math.min(...rolls);

    // Reset colors
    member1.style.backgroundColor = '';
    member2.style.backgroundColor = '';
    member3.style.backgroundColor = '';

    // Apply colors based on the rolls
    if (roll1 === roll2 && roll2 === roll3) {
        member1.style.backgroundColor = 'blue';
        member2.style.backgroundColor = 'blue';
        member3.style.backgroundColor = 'blue';
        winnerDiv.textContent = 'It\'s a draw!';
    } else {
        if (roll1 === maxRoll) {
            member1.style.backgroundColor = 'green';
        } else if (roll1 === minRoll) {
            member1.style.backgroundColor = 'red';
        } else {
            member1.style.backgroundColor = 'yellow';
        }

        if (roll2 === maxRoll) {
            member2.style.backgroundColor = 'green';
        } else if (roll2 === minRoll) {
            member2.style.backgroundColor = 'red';
        } else {
            member2.style.backgroundColor = 'yellow';
        }

        if (roll3 === maxRoll) {
            member3.style.backgroundColor = 'green';
        } else if (roll3 === minRoll) {
            member3.style.backgroundColor = 'red';
        } else {
            member3.style.backgroundColor = 'yellow';
        }

        // Determine and display the winner
        if (roll1 === maxRoll) {
            winnerDiv.textContent = 'Member A wins!';
        } else if (roll2 === maxRoll) {
            winnerDiv.textContent = 'Member B wins!';
        } else {
            winnerDiv.textContent = 'Member C wins!';
        }
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}