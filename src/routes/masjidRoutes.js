const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const MasjidController = require("../controllers/masjidController");
const router = express.Router();

router.post("/masjids", authMiddleware, MasjidController.create);
router.get("/masjids", authMiddleware, MasjidController.getAll);
router.get("/masjids/:id", authMiddleware, MasjidController.getById);
router.put("/masjids/:id", authMiddleware, MasjidController.update);
router.delete("/masjids/:id", authMiddleware, MasjidController.delete);

module.exports = router;
