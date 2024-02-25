import { connectToDB } from "@/utils/database";
import Messages from "@/models/message";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}) {
    try {
        const {id} = params;
        if(id){
           await connectToDB();
           await Messages.findByIdAndDelete(id);
           return NextResponse.json({message:'Message Deleted Successfully'},{status:200});   
        }
        else return NextResponse.json({message:'Id not found'},{status:200});
    }
    catch(err){
        return NextResponse.json({message:'Internal Server Error'},{status:200});
    }
}

export async function GET(req,{params}) {
    try {
        const {id} = params;
        if(id){
           await connectToDB();
           const message = await Messages.findById(id)
           return NextResponse.json(message,{status:200});   
        }
        else return NextResponse.json({message:'Id not found'},{status:200});
    }
    catch(err){
        return NextResponse.json({message:'Internal Server Error'},{status:200});
    }
}

