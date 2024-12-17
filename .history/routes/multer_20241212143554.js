const multer = require("multer");
const {v4: uuidv4} = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/images/uploads')
  },
  filename: function (req, file, cb) {
    const uniquename = uuidv4
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })