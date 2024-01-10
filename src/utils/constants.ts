export const STAGING_ENDPOINT = "http://api.tvmaze.com";

export const API = {
  getShowUrl: "/singlesearch/shows?q=",
  embedEpisodes: "&embed=episodes",
  getEpisodeUrl: "/episodes/",
};

export const enum RoutePath {
  ShowOverviewPath = "/shows/",
  EpisodeDetailsPath = "/shows/:id/episode/:episodeId",
}

export const defaultEpisodeValue = {
  id: 0,
  season: 0,
  airtime: 0,
  url: "",
  name: "",
  airdate: "",
  number: 0,
  image: {
    medium: "",
    original: "",
  },
  rating: {
    average: 0,
  },
  summary: "",
};

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
    episodes: [defaultEpisodeValue],
  },
};

