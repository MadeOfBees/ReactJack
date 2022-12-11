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
        <li>Blackjack is a card game played with a deck of 52 cards, these cards are one of 4 suits: Spades, Hearts, Diamonds, and Clubs, and for each suit there is one of each card from 2 to 10, and 3 face cards: Jack, Queen, and King as well as the ace which can be 11 or 1 if you would bust otherwise.</li>
        <li>The goal of the game is to get as close to 21 as possible without going over, or "busting."</li>
        <li>Each player is dealt two cards and has the option to "hit" and take another card, or "stay" and keep the cards they have.</li>
        <li>One of the computer's cards is face up and the other is face down until the game's over then all cards are flipped face up</li>
        <li>The computer must hit if they are below 17</li>
        <li>The winner of the game is the player who gets closest to 21 without busting, the computer will always win in case of a tie</li>
        <li>When the game is over you can click the "New Game" button to play again</li>
      </ul>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
    </div>
  );
}

export default AboutUs;