import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './views/Welcome';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={() => <Welcome />} />
        </Switch>
    </Router>
  );
}

export default App;
