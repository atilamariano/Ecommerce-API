import { model, Schema } from "mongoose";

const schema = new Schema({
    id: { type: String, required: true },
    image: { type: String, required: true },
    preco: { type: Number, required: true },
    description: { type: String, required: true }, 
});


export const Model = model("products", schema);
