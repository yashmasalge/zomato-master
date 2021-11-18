import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
    images : [{location: {type:String , required : true}}]
});

const ImageModel = mongoose.model("Images", ImageSchema);

module.exports = ImageModel;

