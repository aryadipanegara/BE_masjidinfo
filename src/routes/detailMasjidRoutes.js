const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const DetailMasjidController = require("../controllers/detailMasjidController");
const router = express.Router();

router.post("/detailmasjids", authMiddleware, DetailMasjidController.create);
router.get("/detailmasjids", authMiddleware, DetailMasjidController.getAll);
router.get(
  "/detailmasjids/:id",
  authMiddleware,
  DetailMasjidController.getById
);
router.put("/detailmasjids/:id", authMiddleware, DetailMasjidController.update);
router.delete(
  "/detailmasjids/:id",
  authMiddleware,
  DetailMasjidController.delete
);

module.exports = router;
