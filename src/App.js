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
import TwoTwoOne from "./views/UnidadII/TwoTwoOne";
import TwoThreeOneOne from "./views/UnidadII/TwoThreeOneOne";
import TwoThreeOneTwo from "./views/UnidadII/TwoThreeOneTwo";
import TwoThreeTwoOne from "./views/UnidadII/TwoThreeTwoOne";
import TwoThreeTwoTwo from "./views/UnidadII/TwoThreeTwoTwo";
import OneOne from "./views/UnidadI/OneOne";
import OneOneOne from "./views/UnidadI/OneOneOne";
import OneOneTwo from "./views/UnidadI/OneOneTwo";
import OneTwo from "./views/UnidadI/OneTwo";
import OneThree from "./views/UnidadI/OneThree";
import OneFour from "./views/UnidadI/OneFour";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Welcome />} />
        <Route path="/sources" exact component={() => <Sources />} />
        <Route path="/methodology" exact component={() => <Method />} />
        <Route
          path="/content/II/intro"
          exact
          component={() => <IntroduccionII />}
        />
        <Route path="/content/II/2.1" exact component={() => <TwoOne />} />
        <Route path="/content/II/2.2" exact component={() => <TwoTwo />} />
        <Route path="/content/II/2.2.1" exact component={() => <TwoTwoOne />} />
        <Route path="/content/II/2.3" exact component={() => <TwoThree />} />
        <Route
          path="/content/II/2.3.1"
          exact
          component={() => <TwoThreeOne />}
        />
        <Route
          path="/content/II/2.3.1.1"
          exact
          component={() => <TwoThreeOneOne />}
        />
        <Route
          path="/content/II/2.3.1.2"
          exact
          component={() => <TwoThreeOneTwo />}
        />
        <Route
          path="/content/II/2.3.2"
          exact
          component={() => <TwoThreeTwo />}
        />
        <Route
          path="/content/II/2.3.2.1"
          exact
          component={() => <TwoThreeTwoOne />}
        />
        <Route
          path="/content/II/2.3.2.2"
          exact
          component={() => <TwoThreeTwoTwo />}
        />
        <Route path="/content/I/1.1" exact component={() => <OneOne />} />
        <Route path="/content/I/1.1.1" exact component={() => <OneOneOne />} />
        <Route path="/content/I/1.1.2" exact component={() => <OneOneTwo />} />
        <Route path="/content/I/1.1.2" exact component={() => <OneOneTwo />} />
        <Route path="/content/I/1.2" exact component={() => <OneTwo />} />
        <Route path="/content/I/1.3" exact component={() => <OneThree />} />
        <Route path="/content/I/1.4" exact component={() => <OneFour />} />
        <Route path="/content/II/cierre" exact component={() => <CierreII />} />
      </Switch>
    </Router>
  );
}

export default App;
