import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/page-not-found";
import { LandingPage } from "../pages/landing-page";
import { MovieOverviewPage } from "../pages/movie-details-page";
import { EpisodeDetailsPage } from "../pages/episode-details-page";
import { RoutePath } from "../utils/constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path={RoutePath.EpisodeDetailsPath}
        element={<EpisodeDetailsPage />}
      />
      <Route
        path={`${RoutePath.ShowOverviewPath}:id`}
        element={<MovieOverviewPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
