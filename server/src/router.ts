import * as express from "express";
const router = express.Router();

router.get("/", (req: any, res: any) => {
	res.send("server is up and running");
});

module.exports = router;
