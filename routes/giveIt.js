const express = require("express");
const router = express.Router();
const { getContentById } = require("../services/remember");

router.get("/:content_id", async (req, res, next) => {
  const content = await getContentById(req.params.content_id);
  if (content) return res.send(content);
  return res
    .status(404)
    .send(
      "An error has occurred while giving it, make sure you entered the right url and try again."
    );
});

module.exports = router;
