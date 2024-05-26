import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieDetail,
  MovieIndex,
  MovieUpdate,
} from "../contollers/movies.controller.js";

const router = express.Router();

router.get("/", MovieIndex);

router.get("/:id", MovieDetail);

router.post("/", MovieCreate);

router.put("/:id", MovieUpdate);

router.delete("/:id", MovieDelete);

export default router;
