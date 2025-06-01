let num = 10
num&&=50 // num = num && (num=50)

// if(loggedInUser){
//     loggedInUser = {...loggedInUser,color:"red"}
// }

loggedInUser &&= {...loggedInUser,color:"red"}