import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import Navigation from "./navigation/navigation";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const HomePage = lazy(() => import("./homepage/HomePage"));
const MoviesPage = lazy(() => import("./movies/MoviesPage"));
const MovieDetailPage = lazy(() => import("./movieDetailPage/MovieDetailPage"));

const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense
        fallback={
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movie} component={MovieDetailPage} />
          <Route path={routes.movies} component={MoviesPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
