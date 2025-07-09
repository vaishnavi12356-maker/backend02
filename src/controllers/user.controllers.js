import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiErrors.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { response } from "express";
const registerUser = asyncHandler(async (req, res) => {
  //get user details from the frontend //data from the postman
  //validation of the user data  -not empty
  //check if user is already exists: username and email
  //check for the images ,check for avatar
  //upload them to cloudinary
  //url from the cloudinary response, check avatar
  //create user object - create entry in database
  ////remove password and refresh token field from the response
  //check for user creation
  //if user created== return response
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or email already exist.");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path; //add more fields in request by middelware req.body by default by express req.files by multter,taking first part of the object path is obtained ,path is uplodedby the multer is obtained
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
   if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
  //entry in the db using user
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
  })
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registring the user")
  }

    return res.status(201).json(
        new ApiResponse(200, createdUser,"User registered Successfully!")
    )
});

export { registerUser };
//app.js ==> user.router ==>  user.controller
