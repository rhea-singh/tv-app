export const STAGING_ENDPOINT = "http://api.tvmaze.com";

export const API = {
  getShowUrl: "/singlesearch/shows?q=",
  embedEpisodes: "&embed=episodes",
  getEpisodeUrl: "/shows/:id/episodebynumber?season=:season&number=",
};

export const enum RoutePath {
  ShowOverviewPath = "/shows/",
  EpisodeDetailsPath = "/shows/:id/episode/:episodeId",
}

export const defaultShowValue = {
  id: 0,
  language: "",
  runtime: 0,
  ended: "",
  url: "",
  name: "",
  genres: [],
  rating: {
    average: 0,
  },
  image: {
    medium: "",
    original: "",
  },
  summary: "",
  _embedded: {
    episodes: [],
  },
};
