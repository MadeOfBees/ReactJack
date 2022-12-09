import GitHubIcon from '@mui/icons-material/GitHub';

function greetings() {
  if (new Date().getHours() < 12) {
    return 'morning';
  } else if (new Date().getHours() < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  };
};

function AboutUs() {
  return (
    <div>
      <h1>Good {greetings()}!</h1>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
    </div>
  );
}

export default AboutUs;