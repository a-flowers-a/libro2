import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./views/Home/Welcome";
import Manual from "./views/Home/Manual";
import Capability from "./views/Home/Capability";
import Method from "./views/Home/Method";
import Evaluation from "./views/Home/Evaluation";
import Contacts from "./views/Home/Contacts";
import Requirements from "./views/Home/Require";
import Sources from "./views/Home/Sources";
import Glossary from "./views/Home/Glossary";

// Unit one
import Competencia1 from "./views/UnidadI/Competencia";
import MaterialApoyo1 from "./views/UnidadI/Material";
import Referencias1 from "./views/UnidadI/Referencias";
import IntroduccionI from "./views/UnidadI/Intro";
import OneOne from "./views/UnidadI/OneOne";
import OneOneOne from "./views/UnidadI/OneOneOne";
import OneOneTwo from "./views/UnidadI/OneOneTwo";
import OneTwo from "./views/UnidadI/OneTwo";
import OneThree from "./views/UnidadI/OneThree";
import OneFour from "./views/UnidadI/OneFour";
import CierreI from "./views/UnidadI/Cierre";
import Evaluacion1 from "./views/UnidadI/Evaluacion";

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
import IntroduccionIII from "./views/UnidadIII/Introduccion";
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
import CierreIII from "./views/UnidadIII/Cierre";

//Fourth
import IntroduccionIV from "./views/UnidadIV/Introduccion";
import FourOne from "./views/UnidadIV/FourOne";
import FourOneOne from "./views/UnidadIV/FourOneOne";
import FourOneOneOne from "./views/UnidadIV/FourOneOneOne";
import FourOneOneTwo from "./views/UnidadIV/FourOneOneTwo";
import FourTwo from "./views/UnidadIV/FourTwo";
import FourTwoOne from "./views/UnidadIV/FourTwoOne";
import FourTwoTwo from "./views/UnidadIV/FourTwoTwo";
import FourTwoThree from "./views/UnidadIV/FourTwoThree";
import FourTwoThreeOne from "./views/UnidadIV/FourTwoThreeOne";
import FourThree from "./views/UnidadIV/FourThree";
import FourThreeOne from "./views/UnidadIV/FourThreeOne";
import FourFour from "./views/UnidadIV/FourFour";
import CierreIV from "./views/UnidadIV/Cierre";

//Fifth
import FiveOne from "./views/UnidadV/FiveOne";
import IntroduccionV from "./views/UnidadV/Introduccion";
import FiveTwo from "./views/UnidadV/FiveTwo";
import FiveThree from "./views/UnidadV/FiveThree";
import FiveThreeOne from "./views/UnidadV/FiveThreeOne";
import FiveThreeTwo from "./views/UnidadV/FiveThreeTwo";
import FiveThreeThree from "./views/UnidadV/FiveThreeThree";
import FiveThreeFour from "./views/UnidadV/FiveThreeFour";
import FiveThreeFive from "./views/UnidadV/FiveThreeFive";
import FiveThreeSix from "./views/UnidadV/FiveThreeSix";

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
        <Route path="/glossary" exact component={() => <Glossary />} />

        <Route
          path="/content/I/intro"
          exact
          component={() => <IntroduccionI />}
        />
        <Route
          path="/content/I/material"
          exact
          component={() => <MaterialApoyo1 />}
        />
        <Route
          path="/content/I/referencias"
          exact
          component={() => <Referencias1 />}
        />
        <Route
          path="/content/I/competencia"
          exact
          component={() => <Competencia1 />}
        />
        <Route
          path="/content/I/evaluacion"
          exact
          component={() => <Evaluacion1 />}
        />
        <Route path="/content/I/1.1" exact component={() => <OneOne />} />
        <Route path="/content/I/1.1.1" exact component={() => <OneOneOne />} />
        <Route path="/content/I/1.1.2" exact component={() => <OneOneTwo />} />
        <Route path="/content/I/1.2" exact component={() => <OneTwo />} />
        <Route path="/content/I/1.3" exact component={() => <OneThree />} />
        <Route path="/content/I/1.4" exact component={() => <OneFour />} />
        <Route path="/content/I/cierre" exact component={() => <CierreI />} />
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
        <Route
          path="/content/III/intro"
          exact
          component={() => <IntroduccionIII />}
        />
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
        <Route
          path="/content/III/cierre"
          exact
          component={() => <CierreIII />}
        />
        <Route
          path="/content/IV/intro"
          exact
          component={() => <IntroduccionIV />}
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
          path="/content/IV/4.2.3.1"
          exact
          component={() => <FourTwoThreeOne />}
        />
        <Route path="/content/IV/4.3" exact component={() => <FourThree />} />
        <Route
          path="/content/IV/4.3.1"
          exact
          component={() => <FourThreeOne />}
        />
        <Route path="/content/IV/4.4" exact component={() => <FourFour />} />
        <Route path="/content/IV/cierre" exact component={() => <CierreIV />} />
        <Route
          path="/content/V/intro"
          exact
          component={() => <IntroduccionV />}
        />
        <Route path="/content/V/5.1" exact component={() => <FiveOne />} />
        <Route path="/content/V/5.2" exact component={() => <FiveTwo />} />
        <Route path="/content/V/5.3" exact component={() => <FiveThree />} />
        <Route
          path="/content/V/5.3.1"
          exact
          component={() => <FiveThreeOne />}
        />
        <Route
          path="/content/V/5.3.2"
          exact
          component={() => <FiveThreeTwo />}
        />
        <Route
          path="/content/V/5.3.3"
          exact
          component={() => <FiveThreeThree />}
        />
        <Route
          path="/content/V/5.3.4"
          exact
          component={() => <FiveThreeFour />}
        />
        <Route
          path="/content/V/5.3.5"
          exact
          component={() => <FiveThreeFive />}
        />
        <Route
          path="/content/V/5.3.6"
          exact
          component={() => <FiveThreeSix />}
        />
      </Switch>
    </Router>
  );
}

export default App;
