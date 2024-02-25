import { connectToDB } from "@/utils/database";
import Product from "@/models/product";



export async function GET(request, { params }) {
  try{
  const id = params.id; 
  console.log(id);  
  const product = await Product.findById(id);
  if(product) return  Response.json(product,{status:200});
  else return  Response.json({},{status:401});
}
catch(err){
  console.error(err);
  return  Response.json({},{status:500})
}
}