import mongoose from 'mongoose';
const { Schema } = mongoose;

const MatchSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    stadium:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
});

export default mongoose.model("Match", MatchSchema);