import './App.css';
import DashboardPageContainer from './pages/DashboardPage/DashboardPageContainer';
import { useFetch } from './hooks/useFetch';
import FollowUpPageContainer from './pages/FollowUpPage/FollowUpPageContainer';
import GamePageContainer from './pages/GamePage/GamePageContainer';
import HomePageContainer from './pages/HomePage/HomePageContainer';
import InfoPageContainer from './pages/InfoPage/InfoPageContainer';
import ResultPageContainer from './pages/ResultPage/ResultPageContainer';
import TrackerPageContainer from './pages/TrackerPage/TrackerPageContainer';

import { Layout } from './common/components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { isLoading, serverError, apiData } = useFetch('');
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/info" component={InfoPageContainer} />
          <Route
            exact
            path="/game"
            render={(props) => (
              <GamePageContainer
                {...props}
                isLoading={isLoading}
                serverError={serverError}
                apiData={apiData}
              />
            )}
          />
          <Route exact path="/followup" component={FollowUpPageContainer} />
          <Route exact path="/result" component={ResultPageContainer} />
          <Route exact path="/tracker" component={TrackerPageContainer} />
          <Route exact path="/dashboard" component={DashboardPageContainer} />
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
