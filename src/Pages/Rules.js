import GitHubIcon from '@mui/icons-material/GitHub';

function greetings() {
  if (new Date().getHours() < 12) { return 'morning'; }
  else if (new Date().getHours() < 18) { return 'afternoon'; }
  else { return 'evening'; };
};

function AboutUs() {
  return (
    <div>
      <h1>Good {greetings()}!</h1>
      <h3>Welcome to our site!</h3>
      <h3>the rules of blackjack are simple:</h3>
      <ul>
        <li>When the game starts the computer will deal two cards to you and two cards to themselves, with one of the computer's cards face down. If either the player or computer has a total of 21 on their first turn, they win automatically.</li>
        <li>Try to get as close to 21 as possible without going over, and to beat the computer's hand.</li>
        <li>Face cards are worth 10, aces are worth 1 or 11, and all other cards are worth their face value.</li>
        <li>You can then choose to "Hit" and receive additional cards, one at a time, or "Stay" to keep your current total.</li>
        <li>If you go over 21, you lose automatically.</li>
        <li>If you choose to stay, the computer will reveal their face-down card and will hit if their total is less than 17. If the computer has 17 or more, they will stay.</li>
        <li>If the computer goes over 21, you win. Otherwise, the higher total wins, computer always wins on a tie.</li>
        <li>When the game is over, you can choose to play again by clicking the "New Game" button or click off of the modal to see the final hands, click "score" to go back to this modal.</li>
      </ul>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
    </div>
  );
}

export default AboutUs;