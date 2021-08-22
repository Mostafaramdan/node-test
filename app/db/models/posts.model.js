const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const schema = new Schema({
    txt:{
        type:String,
        required: function() { return this.type === 'txt'; }
    },
    file:{
        type:String,
        required: function() { return this.type === 'file'; }
    },
    type:{
        type: String,
        required: true,
        enum : ['txt','vid','img'],
    }
},
{timestamps:true}
)
// schema.methods.toJSON = function(req ){
//     const user = this.toObject()
//     // user.file =req.headers.host+user.file
//     return user
// }

module.exports= mongoose.model('posts',schema );