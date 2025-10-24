export const dynamic ='force-static'


export async function GET(){
    const categories=[
        {id:1,name:'Electronics'},
        {id:2,name:'Fashion'},
        {id:3,name:'Home'},
        {id:4,name:'Sports'},
        {id:5,name:'Toys'},
        ];
    return Response.json(categories)
}