import Stadium from "../models/Stadium.js"

export const createStadium = async (req, res, next) =>{
    const newStadium = new Stadium(req.body)
    
    try{
        const savedStadium = await newStadium.save()
        res.status(200).json(savedStadium);
    }catch(err){
        next(err);
    }
}

export const getStadiums = async (req, res, next) =>{
    try{
        const stadium = await Stadium.find();
        res.status(200).json(stadium);
    }catch(err){
        next(err);
    }
}

export const deleteStadium = async (req, res, next) =>{    
    try{
        await Stadium.findByIdAndDelete(req.params.id)
        res.status(200).json("Stadium has been deleted!");
    }catch(err){
        next(err);
    }
}

export const getStadium = async (req, res, next) =>{
    try{
        const stadium = await Stadium.findById(req.params.id);
        res.status(200).json(stadium);
    }catch(err){
        next(err);
    }
}

export const updateStadium = async (req, res, next) =>{
    try{
        const updatedStadium = await Stadium.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedStadium);
    }catch(err){
        next(err);
    }
}