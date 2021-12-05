import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./views/Home/Welcome";
import Manual from "./views/Home/Manual";
import Capability from "./views/Home/Capability";
import Method from "./views/Home/Method";
import Evaluation from "./views/Home/Evaluation";
import Contacts from "./views/Home/Contacts";
import Requirements from "./views/Home/Require";
import Sources from "./views/Home/Sources";
// Unit one
import OneOne from "./views/UnidadI/OneOne";
import OneOneOne from "./views/UnidadI/OneOneOne";
import OneOneTwo from "./views/UnidadI/OneOneTwo";
import OneTwo from "./views/UnidadI/OneTwo";
import OneThree from "./views/UnidadI/OneThree";
import OneFour from "./views/UnidadI/OneFour";

// Unit two
import IntroduccionII from "./views/UnidadII/Introduccion";
import TwoOne from "./views/UnidadII/TwoOne";
import TwoTwo from "./views/UnidadII/TwoTwo";
import TwoTwoOne from "./views/UnidadII/TwoTwoOne";
import TwoThree from "./views/UnidadII/TwoThree";
import TwoThreeOne from "./views/UnidadII/TwoThreeOne";
import TwoThreeOneOne from "./views/UnidadII/TwoThreeOneOne";
import TwoThreeOneTwo from "./views/UnidadII/TwoThreeOneTwo";
import TwoThreeTwoOne from "./views/UnidadII/TwoThreeTwoOne";
import TwoThreeTwoTwo from "./views/UnidadII/TwoThreeTwoTwo";
import TwoThreeTwo from "./views/UnidadII/TwoThreeTwo";
import CierreII from "./views/UnidadII/Cierre";

// Unit three
import ThreeOne from "./views/UnidadIII/ThreeOne";
import ThreeTwo from "./views/UnidadIII/ThreeTwo";
import ThreeTwoOne from "./views/UnidadIII/ThreeTwoOne";
import ThreeTwoOneOne from "./views/UnidadIII/ThreeTwoOneOne";
import ThreeTwoOneTwo from "./views/UnidadIII/ThreeTwoOneTwo";
import ThreeTwoOneThree from "./views/UnidadIII/ThreeTwoOneThree";
import ThreeTwoOneFour from "./views/UnidadIII/ThreeTwoOneFour";
import ThreeTwoTwo from "./views/UnidadIII/ThreeTwoTwo";
import ThreeTwoTwoOne from "./views/UnidadIII/ThreeTwoTwoOne";
import ThreeTwoTwoTwo from "./views/UnidadIII/ThreeTwoTwoTwo";
import ThreeTwoTwoThree from "./views/UnidadIII/ThreeTwoTwoThree";
import ThreeThreeOneOne from "./views/UnidadIII/ThreeThreeOneOne";
import ThreeThreeOne from "./views/UnidadIII/ThreeThreeOne";
import ThreeThree from "./views/UnidadIII/ThreeThree";
import ThreeThreeTwo from "./views/UnidadIII/ThreeThreeTwo";
import ThreeThreeTwoOne from "./views/UnidadIII/ThreeThreeTwoOne";
import ThreeThreeTwoTwo from "./views/UnidadIII/ThreeThreeTwoTwo";
import ThreeThreeOneTwo from "./views/UnidadIII/ThreeThreeOneTwo";
import Formulario from "./views/UnidadIII/formulario";

//Fourth
import FourOne from "./views/UnidadIV/FourOne";
import FourOneOne from "./views/UnidadIV/FourOneOne";
import FourOneOneOne from "./views/UnidadIV/FourOneOneOne";
import FourOneOneTwo from "./views/UnidadIV/FourOneOneTwo";
import FourTwo from "./views/UnidadIV/FourTwo";
import FourTwoOne from "./views/UnidadIV/FourTwoOne";
import FourTwoTwo from "./views/UnidadIV/FourTwoTwo";
import FourTwoThree from "./views/UnidadIV/FourTwoThree";
import FourTwoTwoThree from "./views/UnidadIV/FourTwoTwoThree";
import FourThree from "./views/UnidadIV/FourThree";
import FourThreeOne from "./views/UnidadIV/FourThreeOne";
import FourFour from "./views/UnidadIV/FourFour";
//Glossary
import Glossary from "./views/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Welcome />} />
        <Route path="/welcome" exact component={() => <Welcome />} />
        <Route path="/manual" exact component={() => <Manual />} />
        <Route path="/capability" exact component={() => <Capability />} />
        <Route path="/methodology" exact component={() => <Method />} />
        <Route path="/evaluation" exact component={() => <Evaluation />} />
        <Route path="/contact" exact component={() => <Contacts />} />
        <Route path="/requirements" exact component={() => <Requirements />} />
        <Route path="/sources" exact component={() => <Sources />} />

        <Route path="/content/I/1.1" exact component={() => <OneOne />} />
        <Route path="/content/I/1.1.1" exact component={() => <OneOneOne />} />
        <Route path="/content/I/1.1.2" exact component={() => <OneOneTwo />} />
        <Route path="/content/I/1.2" exact component={() => <OneTwo />} />
        <Route path="/content/I/1.3" exact component={() => <OneThree />} />
        <Route path="/content/I/1.4" exact component={() => <OneFour />} />
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
        <Route path="/content/II/cierre" exact component={() => <CierreII />} />
        <Route path="/content/III/3.1" exact component={() => <ThreeOne />} />
        <Route path="/content/III/3.2" exact component={() => <ThreeTwo />} />
        <Route
          path="/content/III/3.2.1"
          exact
          component={() => <ThreeTwoOne />}
        />
        <Route
          path="/content/III/3.2.1.1"
          exact
          component={() => <ThreeTwoOneOne />}
        />
        <Route
          path="/content/III/3.2.1.2"
          exact
          component={() => <ThreeTwoOneTwo />}
        />
        <Route
          path="/content/III/3.2.1.3"
          exact
          component={() => <ThreeTwoOneThree />}
        />
        <Route
          path="/content/III/3.2.1.4"
          exact
          component={() => <ThreeTwoOneFour />}
        />
        <Route
          path="/content/III/3.2.2"
          exact
          component={() => <ThreeTwoTwo />}
        />
        <Route
          path="/content/III/3.2.2.1"
          exact
          component={() => <ThreeTwoTwoOne />}
        />
        <Route
          path="/content/III/3.2.2.2"
          exact
          component={() => <ThreeTwoTwoTwo />}
        />
        <Route
          path="/content/III/3.2.2.3"
          exact
          component={() => <ThreeTwoTwoThree />}
        />
        <Route path="/content/III/3.3" exact component={() => <ThreeThree />} />
        <Route
          path="/content/III/3.3.1"
          exact
          component={() => <ThreeThreeOne />}
        />
        <Route
          path="/content/III/3.3.1.1"
          exact
          component={() => <ThreeThreeOneOne />}
        />
        <Route
          path="/content/III/3.3.1.2"
          exact
          component={() => <ThreeThreeOneTwo />}
        />
        <Route
          path="/content/III/3.3.2"
          exact
          component={() => <ThreeThreeTwo />}
        />
        <Route
          path="/content/III/3.3.2.1"
          exact
          component={() => <ThreeThreeTwoOne />}
        />
        <Route
          path="/content/III/3.3.2.2"
          exact
          component={() => <ThreeThreeTwoTwo />}
        />
        <Route
          path="/content/III/formulas"
          exact
          component={() => <Formulario />}
        />
        <Route path="/content/IV/4.1" exact component={() => <FourOne />} />
        <Route
          path="/content/IV/4.1.1"
          exact
          component={() => <FourOneOne />}
        />
        <Route
          path="/content/IV/4.1.1.1"
          exact
          component={() => <FourOneOneOne />}
        />
        <Route
          path="/content/IV/4.1.1.2"
          exact
          component={() => <FourOneOneTwo />}
        />
        <Route path="/content/IV/4.2" exact component={() => <FourTwo />} />
        <Route
          path="/content/IV/4.2.1"
          exact
          component={() => <FourTwoOne />}
        />
        <Route
          path="/content/IV/4.2.2"
          exact
          component={() => <FourTwoTwo />}
        />
        <Route
          path="/content/IV/4.2.3"
          exact
          component={() => <FourTwoThree />}
        />
        <Route
          path="/content/IV/4.2.2.3"
          exact
          component={() => <FourTwoTwoThree />}
        />
        <Route path="/content/IV/4.3" exact component={() => <FourThree />} />
        <Route
          path="/content/IV/4.3.1"
          exact
          component={() => <FourThreeOne />}
        />
        <Route path="/content/IV/4.4" exact component={() => <FourFour />} />
        <Route path="/glossary" exact component={() => <Glossary />} />
      </Switch>
    </Router>
  );
}

export default App;
