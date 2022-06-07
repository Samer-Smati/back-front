const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    title:{type:String,required:true,unique:true},
    description:{type:String},
    id:{type:Number,unique:true},
    price:{type:Number},
    category:{type:String},
    image:{type:String},
    rating:{type:Object},
},{
    timestamps:true
}
)


module.exports = mongoose.model('Product',productSchema);