import './style/App.scss';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import ReduxComponent from './components/reduxComponent/index.js';

import ColorText from '../ColorText';
import EmailForm from '../Form';

import lucasSmall from './images/lucas 500x600.png';
import lucasMed from './images/lucas 800x960.png';
import lucasBig from './images/lucas 1200x1440.png';

function App() {
  return (
    <div className="App">
      <body>
        <h1 className="Header">Welcome to my website :)</h1>
        <div id="list">
          <div>
            <img class="Image"
              src={lucasBig}
              alt={''} />
          </div>
          <div>
            <p className="Body">
              Hi! My name is Lucas. I'm a student studying Computer Science at Dartmouth College from Onalaska, Wisconsin.
              I'm interested in website development, circuit design, and software engineering. My favorite color is
              <ColorText class="Teal" text=" teal" />,
              I have a cat named [Sushi 🍣], and I love to [cook].
            </p>
            <p className="Body">
              Now that you know a little bit about me, head over to my [project page] to learn more about what I do.
            </p>
            <div className="Body">
              <EmailForm />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
