import { connectToDB } from "@/utils/database";
import Product from "@/models/product";



export async function GET(request, { params }) {
  const id = params.id; 
  console.log(id);
  return new Response("s",{
         status:200
       })
}