import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    orderDetails: [{
        food: {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        },
        quantity: { type: Number, required: true },
        paymode: { type: String, required: true },
        status: { type: String, default: "placed" },
        paymentDetails: {
            itemTotal: { type: Number, required: true },
            promo: { type: Number, required: true },
            tax: { type: Number, required: true },
        }
    }]
},
    {
        timestamps: true
    }
);

const OrderModel = mongoose.model("Orders", orderSchema);
module.exports = OrderModel;
