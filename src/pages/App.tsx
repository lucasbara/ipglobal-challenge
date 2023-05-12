import "@/styles/globals.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p style={{ width: "100%", textAlign: "center" }}>Boiler Plate</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
