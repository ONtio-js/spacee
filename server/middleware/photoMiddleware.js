const multer = require('multer');
const photoMiddleware = multer({dest:'controller/images/'});
module.exports =photoMiddleware;