import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ 
    storage, 
})
/*You're telling multer:

“Save uploaded files to the ./public/temp folder.”

“Use the same name as the file had when uploaded.”
*/
