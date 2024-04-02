import  jwt  from "jsonwebtoken";

const SECRET_KEY = "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm";

const generateToken = (userId) => {
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken = (token) => {
   const decodedToken = jwt.verify(token,SECRET_KEY);
   return decodedToken.userId;
}

const jwtProvider = {
  generateToken,
  getUserIdFromToken,
};
export default jwtProvider; 
