import './App.css';
import DashboardPageContainer from './pages/DashboardPage/DashboardPageContainer';
import FollowUpPageContainer from './pages/FollowUpPage/FollowUpPageContainer';
import GamePageContainer from './pages/GamePage/GamePageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import InfoPageContainer from './pages/InfoPage/InfoPageContainer';
import ResultPageContainer from './pages/ResultPage/ResultPageContainer';
import TrackerPageContainer from './pages/TrackerPage/TrackerPageContainer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/info" component={InfoPageContainer} />
        <Route exact path="/game" component={GamePageContainer} />
        <Route exact path="/followup" component={FollowUpPageContainer} />
        <Route exact path="/result" component={ResultPageContainer} />
        <Route exact path="/tracker" component={TrackerPageContainer} />
        <Route exact path="/dashboard" component={DashboardPageContainer} />
        <Route exact path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  );
}

export default App;
