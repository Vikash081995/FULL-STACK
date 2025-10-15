import {User} from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-errors.js";
import { asyncHandler } from "../utils/async-handler.js";



const generateAccessAndRefreshTokens = async (userId)=>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
    }catch{
throw new ApiError("Something went wrong",500)
    }
}

const registerUser = asyncHandler(async(req,res)=>{
    const {email,username,password,role} = req.body;
   const existedUser = await User.findOne({
    $or:[
        {email},
        {username}
    ]
   })
   
   if(existedUser){
    throw new ApiError("User already exists",400)
   }

   const user = await User.create({
    email,
    password,
    username,
    isEmailVerified:false,
    role
   })

  const {unhasedToken,hashedToken,tokenExpiry}= user.generateTemporaryToken()
  user.emailVerificationToken = hashedToken
  user.emailVerificationExpiry= tokenExpiry
  await user.save({validateBeforeSave:false})

 const createdUser =  await User.findById(user._id).select(
    "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
  )


  if(!createdUser){
    throw new ApiError("Something went wrong",500)
  }

  return res.status(201).json(new ApiResponse(
    200,
    {user:createdUser},
    "User created successfully"
  ))

  
})

export {registerUser}