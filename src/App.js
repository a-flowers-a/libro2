import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './views/Welcome';
import Book from './views/Book';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={() => <Welcome />} />
            <Route path="/book" exact component={() => <Book />} />
        </Switch>
    </Router>
  );
}

export default App;
