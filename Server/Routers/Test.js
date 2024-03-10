import express from "express";

const router = express.Router();

router.get('/test',(req, res) => {
    res.json("This is test api. Everything looks good");
})
export default router;
