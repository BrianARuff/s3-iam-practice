require("dotenv").config();
const express = require("express");
const router = express.Router();
const { s3 } = require("../../s3");
const { v4: uuid } = require("uuid");

router.post("/upload-image", (req, res) => {
  console.log(req.body.fileName);
  s3.getSignedUrl(
    "putObject",
    {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.body.fileName,
      Expires: 60,
    },
    (err, url) => {
      if (err) {
        console.log("\nerror", err, "\n");
        return res.status(500).json({ error: err });
      }
      console.log("\nurl", url, "\n");
      res.status(200).json({ url });
    }
  );
});

module.exports = router;
