import { connectToDB } from "@/utils/database";
import Product from "@/models/product";

import path from "path";
import { writeFile } from "fs/promises";

export const GET = async (req) => {
    try {
       await connectToDB(); 
        const searchParams = req.nextUrl.searchParams
        const top =  parseInt(searchParams.get('top')); 
        let products = [];
        if(top) products = await Product.find().sort({price:'desc'}).limit(top); 
        else products = await Product.find({});
        return new Response(JSON.stringify(products),{
         status:200
       })
    } 
    catch(err){
        console.log(err);
        return new Response("Failed to fetch all Products",{
            status:500
        })      
    }
}

export const POST = async (req) => {
    try
    {
        connectToDB();
        const data = await req.formData();
        const image = data.get('image');

        const buffer = Buffer.from(await image.arrayBuffer());
        const fileName = Date.now() + image.name.replaceAll(" ","_");

        await writeFile(
            path.join(process.cwd(),"public/ProductImage/" + fileName),
            buffer
        );

        data.set("image","/ProductImage/" + fileName);
        
        const product = {}
        for (const [key,value] of data.entries())
        {
            if(key == "price" || key == "minQty") product[key] = parseInt(value);  
            else product[key] = value;  
        } 
        await Product.create(product);
        
        return new Response(JSON.stringify({message:"Product Added Succesfully"}),{
            status:200
        });                
    }
    catch(err)
    {
        console.error(err);
        return new Response("Failed to add Product",{
            status:500
        });
    }
}