// try{
//     console.log(a);
// }catch(err){
    
// }

async function fetchFakeWebsite(){
    try{

        const res = await fetch('https://example.com');
    }catch(err){
        console.log("Something went wrong", err)
    }
}