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
import NewsMapping from "./components/news/newsMapping";
import OttInfo from "./components/ottInfo/ottInfoMapping";
import MovieSchedule from "./components/scheduleMovie/movieScheduleMapping";
import OttForm from "./components/ottInfo/ottForm";
import ScheduleForm from "./components/scheduleMovie/scheduleForm";
import LatestMovieArticles from "./components/movieArticles/latestMovieArticles";
import MostReadNews from "./components/movieArticles/mostReadNews";

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
            <Route path= "/collectionMapping">
              <CollectionMapping />
            </Route>
            <Route path= "/newsMapping">
              <NewsMapping />
            </Route>
            <Route path= "/ottInfo">
              <OttInfo />
            </Route>
            <Route path= "/movieSchedule">
              <MovieSchedule />
            </Route>
            <Route path= "/ottForm">
              <OttForm />
            </Route>
            <Route path= "/scheduleForm">
              <ScheduleForm />
            </Route>
            <Route path= "/latestMovieArticles">
              <LatestMovieArticles />
            </Route>
            <Route path= "/mostReadMovieArticle">
              <MostReadNews />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
