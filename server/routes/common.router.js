import Router from "express";
import CommonController from "../controllers/commonController.js";
import Albums from "../models/albums.model.js";
import Groups from "../models/groups.model.js";
import Members from "../models/members.model.js";
import Songs from "../models/songs.model.js";

const router = new Router()

const groupsController = new CommonController(Groups)
router.get("/groups", (req, res) => groupsController.findAll(req, res))
router.put("/groups/:groupId", (req, res) => groupsController.update(req, res))

const membersController = new CommonController(Members)
router.get("/members", (req, res) => membersController.findAll(req, res))
router.put("/members/:memberId", (req, res) => membersController.update(req, res))

const albumsController = new CommonController(Albums)
router.get("/albums", (req, res) => albumsController.findAll(req, res))
router.put("/albums/:albumId", (req, res) => albumsController.update(req, res))

const songsController = new CommonController(Songs)
router.get("/songs", (req, res) => songsController.findAll(req, res))
router.put("/songs/:songId", (req, res) => songsController.update(req, res))
router.post("/songs", (req, res) => songsController.create(req, res))
router.delete("/songs/:songsId", (req, res) => songsController.delete(req, res))

export default router