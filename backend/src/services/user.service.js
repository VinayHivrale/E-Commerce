import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwtProvider from "../config/jwtProvider.js";

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user already exist with email : ", email);
    }

    password = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password });
    
    console.log("created user ", user);

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);

    console.log(" user from find user by id  ", user);
    
    if (!user) {
      throw new Error("user not found with id : ", userId);
    }

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email : ", email);
    }

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    console.log(userId);
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("user not found with Id : ", userId);
    }

    return user;

  } catch (err) {
    throw new Error(err.message);
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

const userService = {
  createUser,
  findUserById,
  getUserByEmail,
  getUsers,
  getUserProfileByToken,
}

export default userService;
