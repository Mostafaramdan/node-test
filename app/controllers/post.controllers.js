const postsModel= require('../db/models/posts.model')
const helper= require('../helpers/response')
const upload = require('../middleware/upload')
class controller{
    async all(req,res){
        // ,{id:req.headers.host}
        const data= await  postsModel.find({},function(e,collects){
            collects.forEach(function(collect) {
                
                if(collect.file)
                    collect.file = (req.headers.host +'/'+ collect.file).replace('/\\/g','/');
              })
              res.json( helper(200,collects));
            });
    }
    async add(req,res){
        try{
            if(req.body.type == 'img' || req.body.type == 'vid'){
                req.body.file = req.file.path
            }
            
            const data=  new postsModel(req.body);
            await data.save()
            res.json( helper(200,data));

        }catch(e){
            res.status(500).send(helper(500,e));
        }
    }
    async update(req,res){
        const data= await postsModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send( data);
    }
    get(req,res){
        res.send('tamaam')
    }
    async showMyPosts(req,res){
        let data = await postsModel.find({userId:req.userId._id})
        res.json( helper(200,data));
    }
}
module.exports= controller