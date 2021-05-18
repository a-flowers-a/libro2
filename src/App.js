import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './views/Welcome';
import Book from './views/Book';
import Sources from "./views/Sources";
import Method from "./views/Method";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={() => <Welcome />} />
            <Route path="/book" exact component={() => <Book />} />
            <Route path="/sources" exact component={() => <Sources />} />
            <Route path="/methodology" exact component={() => <Method />} />
        </Switch>
    </Router>
  );
}

export default App;
