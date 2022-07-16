import express from "express";
import {
  watch,
  getEdit,
  getDelete,
  postDelete,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(getDelete).post(postDelete);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;