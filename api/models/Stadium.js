import mongoose from 'mongoose';
const { Schema } = mongoose;

const StadiumSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    capacity:{
        type: String,
        required: true,
        unique: true,
    },
    awayFans:{
        type: Boolean,
        default:true,
    },
});

export default mongoose.model("Stadium", StadiumSchema);