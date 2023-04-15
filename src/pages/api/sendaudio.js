import multer from "multer"
import { NextApiRequest, NextApiResponse } from "next"

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 10, // max file size 10MB
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("audio")(req, res, async (err) => {
      console.log({ file: req.file })
      console.log({ body: req.body.audio })
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.status(400).json({ message: "File too large" })
      } else if (err) {
        // An unknown error occurred when uploading.
        res.status(500).json({ message: "Something went wrong" })
      } else {
        // Everything went fine, send the response.
        const { buffer, originalname } = req.file
        // Do something with the file buffer (e.g. save it to disk)
        res.status(200).json({ message: "File uploaded successfully" })
      }
    })
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
