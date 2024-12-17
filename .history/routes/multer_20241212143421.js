const multer = require("multer");
const {v4: uuidv4} = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/images/uploads')
  },
  filename: function (req, file, cb) {
    1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })