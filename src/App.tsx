import { Switch, Route, Router as WouterRouter } from "wouter";
import WebsiteLanding from "@/Website";
import LoginRegionSelect from "@/Website/pages/LoginRegionSelect";

function App() {
  return (
    <WouterRouter>
      <Switch>
        <Route path="/login" component={LoginRegionSelect} />
        <Route path="/" component={WebsiteLanding} />
        <Route>
          <WebsiteLanding /> {/* Fallback for unknown routes */}
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
