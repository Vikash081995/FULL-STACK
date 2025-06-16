import {cookies} from "next/headers";



export default async function aboutPage(){
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')
    console.log(theme);
    

    console.log("About server components ")
    return <h1>About page </h1>
}