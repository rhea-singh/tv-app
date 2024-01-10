export type episodeType = {
    id: number;
    url: string;
    airdate: string;
    airtime: number,
    name: string;
    season: number;
    number: number;
    rating: ratingType;
    image: imageType;
    summary: ReactNode;
  };