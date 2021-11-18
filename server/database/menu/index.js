import mongoose from 'mongoose';

const MenuSchema = mongoose.Schema({
    menus: [
        {
        name: { type: String, required: true }, 
        items: [{type: mongoose.Types.ObjectId, ref: "Foods"}]
        }
         ],
    recommended: [{ type: mongoose.Types.ObjectId, ref: "Foods", unique:true }],
});

const MenuModel = mongoose.model("Menus", MenuSchema);

module.exports = MenuModel;