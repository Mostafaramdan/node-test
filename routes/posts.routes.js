const express= require('express')
const router= express.Router();
const upload = require('../app/middleware/upload')
const auth = require('../app/middleware/auth')

const postController =   new (require('../app/controllers/post.controllers'));

router.get('/',(req,res)=>  postController.all(req,res))
router.post('/',upload.single('file'),(req,res)=>  postController.add(req,res))
router.post('/:id',(req,res)=>  postController.update(req,res))
router.get('/showMyPosts',auth, (req,res)=>  postController.showMyPosts(req,res))
module.exports= router