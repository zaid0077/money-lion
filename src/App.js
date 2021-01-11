import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Common.css"
import Header from "./components/Header";
import Welcome from "./screens/Welcome"
import PersonalDetails from './screens/PersonalDetails'
import Dob from './screens/Dob'
import Agreement from './screens/Agreements'
import NotFound from './screens/NotFound'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path='/onboard-test.moneylion.com/welcome' exact component={Welcome}></Route>
          <Route path='/onboard-test.moneylion.com/personalDetails' exact component={PersonalDetails}></Route>
          <Route path='/onboard-test.moneylion.com/dob' exact component={Dob}></Route>
          <Route path='/onboard-test.moneylion.com/agreement' exact component={Agreement}></Route>
          <Route path='/' exact component={Welcome}></Route>
          <Route component={NotFound} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
