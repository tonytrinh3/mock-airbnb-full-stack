module.exports = (req,res,next) =>{
    //next middleware move something next to the next middleware
    if (!req.user){
        return res.status(401).send({error: "You must log in !"});
    }
    //les 114. we are building this to let certain routes require authentication
    next();
};