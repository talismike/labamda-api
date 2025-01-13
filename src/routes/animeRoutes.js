import { Router } from "express";

import { getAllAnimes, getAnime } from "../controllers/animeController";

const router = Router();

router.get("/", getAllAnimes);
router.get("/:slug", getAnime);

export default router;
