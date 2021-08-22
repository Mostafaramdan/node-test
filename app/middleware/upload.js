const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const location = path.join("uploads", 'posts' )
        fs.mkdir(location, (err)=>{})
        cb(null, location)
    },
    filename: function(req, file, cb){
        let myName = file.fieldname +"-"+Date.now()+ path.extname(file.originalname)
        cb(null, myName)
    }
})

const upload = multer({
    storage: storage,
    // fileFilter: function(req, file, callback){
    //     // let fType = "a"+req.body.fileType
    //     // console.log(fType)
    //     ext = path.extname(file.originalname)
    //     if(ext!= ".pdf") return callback(new Error('invalid Extension'))
    //     callback(null, true)
    // }
})

module.exports = upload