import { getAnimes, getAnimeBySlug } from "../models/animeModel";

export const getAllAnimes = (req, res) => {
  res.json(getAnimes());
};

export const getAnime = (req, res) => {
  const slug = req.params.slug;
  const anime = getAnimeBySlug(slug);
  if (!anime) {
    res.status(404).send("Anime not found");
    return;
  }
  res.json(anime);
};
