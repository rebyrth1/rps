document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const resultMessage = document.getElementById('result');

    function computerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }

    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const playerChoice = button.id;
            const compChoice = computerChoice();
            const winner = determineWinner(playerChoice, compChoice);
            resultMessage.textContent = `You chose ${playerChoice}, Computer chose ${compChoice}. ${winner}`;
        });
    });
});
