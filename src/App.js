import './App.css';
import DashboardPageContainer from './pages/DashboardPage/DashboardPageContainer';
import GamePageContainer from './pages/GamePage/GamePageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import InfoPageContainer from './pages/InfoPage/InfoPageContainer';
import ResultPageContainer from './pages/ResultPage/ResultPageContainer';
import TrackerPageContainer from './pages/TrackerPage/TrackerPageContainer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/result">Result</Link>
          </li>
          <li>
            <Link to="/tracker">Tracker</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </nav>
        <Switch>
          <Route exact path="/info" component={InfoPageContainer} />
          <Route exact path="/game" component={GamePageContainer} />
          <Route exact path="/result" component={ResultPageContainer} />
          <Route exact path="/tracker" component={TrackerPageContainer} />
          <Route exact path="/dashboard" component={DashboardPageContainer} />
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
