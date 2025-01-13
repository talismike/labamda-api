import animes from "../data/animes.json";

export const getAnimes = () => animes;

export const getAnimeBySlug = (slug) =>
  animes.find((anime) => anime.slug === slug);
