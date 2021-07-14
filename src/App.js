import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './views/Welcome';
import Book from './views/Book';
import Sources from "./views/Sources";
import Method from "./views/Method";
import TwoOne from "./views/UnidadII/TwoOne";
import TwoTwo from "./views/UnidadII/TwoTwo";
import TwoThree from "./views/UnidadII/TwoThree";
import TwoThreeOne from "./views/UnidadII/TwoThreeOne";
import TwoThreeTwo from "./views/UnidadII/TwoThreeTwo";

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
            <Route path="/content/II/2.3" exact component={() => <TwoThree /> } />
            <Route path="/content/II/2.3.1" exact component={() => <TwoThreeOne /> } />
            <Route path="/content/II/2.3.2" exact component={() => <TwoThreeTwo /> } />
        </Switch>
    </Router>
  );
}

export default App;
