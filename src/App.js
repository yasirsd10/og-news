import "./App.css";
import Navbar from "./components/homeComponents/navbar";
import Output from "./output";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewForm from "./components/movieReview/reviewForm";
import CollectionForm from "./components/movieCollections/collectionForm";
import NewsForm from "./components/news/newsForm";
import ReviewMapping from "./components/movieReview/reviewMapping";
import Celebs from "./components/celebs";
import TrendsArea from "./components/homeComponents/trendsArea";
import NewsArea from "./components/news/newsArea";
import CollectionMapping from "./components/movieCollections/collectionMapping";
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
            <Route path= "/celebInfo">
              <Celebs />
            </Route>
            <Route path= "/newsArea">
              <NewsArea />
            </Route>
            <Route path= "/trendsArea">
              <TrendsArea />
            </Route>
            <Route path= "/collectionsArea">
              <CollectionMapping />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
