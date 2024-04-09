import express from "express";
import { getUserProfileAndRepos,likeProfile,getLikes } from "../controllers/user.controller.js";
import {ensureAuthenticated} from "../middleware/ensureAuthenticated.js";

const router=express.Router();
router.get("/test", (_req, res)=>{
    res.json({message : "Here in this route!"});
})
router.get("/profile/:username",getUserProfileAndRepos);

router.get("/likes",ensureAuthenticated,getLikes);
router.post("/like/:username",ensureAuthenticated,likeProfile);

export default router;