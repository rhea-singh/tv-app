import { ReactNode } from "react";

type embeddedType = {
  episodes: Array<episodeType>;
};

type ratingType = {
  average: number;
};

type imageType = {
  medium: string;
  original: string;
};

export type movieType = {
  id: number;
  url: string;
  name: string;
  ended: string;
  language: string;
  genres: Array<string>;
  rating: ratingType;
  image: imageType;
  runtime: number;
  summary: ReactNode;
  _embedded?: embeddedType;
};
