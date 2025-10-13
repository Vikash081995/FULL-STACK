import {ApiResponse} from '../utils/api-response.js'
import { asyncHandler } from '../utils/async-handler.js'
import { xss } from 'xss';
import SeasonDisplay from '../../../../../REACT/02.PROJECTS/GeoLocation-app/SeasonDisplay';

// const healthCheck =async (req,res,next)=>{
//     // try{
//     //     const user = await getUserFromDB()
//     //     res.status(200).json(
//     //         new    ApiResponse(200,{message:'server is running'})
//     //     )
//     // }catch(error){

//     // }
// }

const healthCheck = asyncHandler(async (req, res, next) => {
    res.status(200).json(
        newApiResponse(200, "server is running")
    )
})
export {helthCheck}