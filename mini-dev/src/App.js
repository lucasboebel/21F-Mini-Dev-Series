import './style/App.scss';
import ColorText from './components/ColorText';
import EmailForm from './components/Form';

function App() {
  return (
    <div className="App">
      <body>
        <h1 className="Header">Welcome</h1>
      
        <p className="Body">
        Hi! My name is Lucas. I'm a student studying Computer Science at Dartmouth College from Onalaska, Wisconsin.
        I'm interested in website development, circuit design, and software engineering. My favorite color is 
        <ColorText class="Teal" text =" teal" />, 
        I have a cat named [Sushi 🍣], and I love to [cook]. 
        </p>
        <p className="Body">
        Now that you know a little bit about me, head over to my [project page] to learn more about what I do.
        </p>
        <EmailForm/>
      </body>
    </div>
  );
}

export default App;
