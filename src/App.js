import "./App.css";
import Navbar from "./components/homeComponents/navbar";
import Output from "./output";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewForm from "./components/movieReview/reviewForm";
import CollectionForm from "./components/movieCollections/collectionForm";
import NewsForm from "./components/news/newsForm";
import ReviewArea from "./components/movieReview/reviewArea";
import ReviewMapping from "./components/movieReview/reviewMapping";

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
            <Route path= "/reviewArea">
              <ReviewMapping />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
