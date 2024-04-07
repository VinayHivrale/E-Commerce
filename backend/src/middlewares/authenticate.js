import jwtProvider from "../config/jwtProvider.js";
import userService from "../services/user.service.js";

const authenticate = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        console.log("token ",token);

        if(!token){
            return res.status(404).send({error:"Token not found...."})
        }

        const userId = await jwtProvider.getUserIdFromToken(token);
        const user = await userService.findUserById(userId);
        // console.log(" getting user from userId in authenticate ", user);
        req.user = user;

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
    next();
}

export {authenticate};