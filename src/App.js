import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./views/Home/Welcome";
import Manual from "./views/Home/Manual";
import Capability from "./views/Home/Capability";
import Method from "./views/Home/Method";
import Evaluation from "./views/Home/Evaluation";
import Contacts from "./views/Home/Contacts";
import Requirements from "./views/Home/Require";
import Sources from "./views/Home/Sources";
import Glossary from "./views/Home";

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
      </Switch>
    </Router>
  );
}

export default App;
