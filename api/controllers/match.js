import Match from "../models/Match.js"
export const createMatch = async (req, res, next) =>{
    const newMatch = new Match(req.body)
    
    try{
        const savedMatch = await newMatch.save()
        res.status(200).json(savedMatch);
    }catch(err){
        next(err);
    }
}

//fix update user and update match
export const updateMatch = async (req, res, next) =>{
    try{
        const updatedMatch = await Match.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedMatch);
    }catch(err){
        next(err);
    }
}

export const deleteMatch = async (req, res, next) =>{    
    try{
        await Match.findByIdAndDelete(req.params.id)
        res.status(200).json("Match has been deleted!");
    }catch(err){
        next(err);
    }
}

export const getMatch = async (req, res, next) =>{
    try{
        const match = await Match.findById(req.params.id);
        res.status(200).json(match);
    }catch(err){
        next(err);
    }
}

export const getMatches = async (req, res, next) =>{
    try{
        const match = await Match.find();
        res.status(200).json(match);
    }catch(err){
        next(err);
    }
}