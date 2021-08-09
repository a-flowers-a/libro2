import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./views/Welcome";
import Sources from "./views/Sources";
import Method from "./views/Method";
import TwoOne from "./views/UnidadII/TwoOne";
import TwoTwo from "./views/UnidadII/TwoTwo";
import TwoThree from "./views/UnidadII/TwoThree";
import TwoThreeOne from "./views/UnidadII/TwoThreeOne";
import TwoThreeTwo from "./views/UnidadII/TwoThreeTwo";
import CierreII from "./views/UnidadII/Cierre";
import IntroduccionII from "./views/UnidadII/Introduccion";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Welcome />} />
        <Route path="/sources" exact component={() => <Sources />} />
        <Route path="/methodology" exact component={() => <Method />} />
        <Route path="/content/II/intro" exact component={() => <IntroduccionII /> }  />
        <Route path="/content/II/2.1" exact component={() => <TwoOne />} />
        <Route path="/content/II/2.2" exact component={() => <TwoTwo />} />
        <Route path="/content/II/2.3" exact component={() => <TwoThree />} />
        <Route
          path="/content/II/2.3.1"
          exact
          component={() => <TwoThreeOne />}
        />
        <Route
          path="/content/II/2.3.2"
          exact
          component={() => <TwoThreeTwo />}
        />
        <Route path="/content/II/cierre" exact component={() => <CierreII />} />
      </Switch>
    </Router>
  );
}

export default App;
