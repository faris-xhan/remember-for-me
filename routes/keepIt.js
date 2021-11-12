const express = require("express");
const { DOMAIN } = require("../config");
const { createContent } = require("../services/remember");

const router = express.Router();

router.get("/:content", async (req, res, next) => {
  const contentId = await createContent(req.params.text);
  if (contentId) return res.send(DOMAIN + contentId);
  return res
    .status(404)
    .send("An error has occurred while keeping it, try again.");
});

module.exports = router;
