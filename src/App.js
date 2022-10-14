import "./App.css";
import Navbar from "./components/navbar";
import Output from "./output";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewForm from "./components/reviewForm";
import CollectionForm from "./components/collectionForm";
import NewsForm from "./components/newsForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Output />
            </Route>
            <Route path="/reviewForm">
              <ReviewForm />
            </Route>
            <Route path="/collectionForm">
              <CollectionForm />
            </Route>
            <Route path="/newsForm">
              <NewsForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
