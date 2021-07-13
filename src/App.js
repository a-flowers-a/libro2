import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './views/Welcome';
import Book from './views/Book';
import Sources from "./views/Sources";
import Method from "./views/Method";
import TwoOne from "./views/UnidadII/TwoOne";
import TwoTwo from "./views/UnidadII/TwoTwo";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={() => <Welcome />} />
            <Route path="/book" exact component={() => <Book />} />
            <Route path="/sources" exact component={() => <Sources />} />
            <Route path="/methodology" exact component={() => <Method />} />
            <Route path="/content/II/2.1" exact component={() => <TwoOne /> } />
            <Route path="/content/II/2.2" exact component={() => <TwoTwo /> } />
        </Switch>
    </Router>
  );
}

export default App;
