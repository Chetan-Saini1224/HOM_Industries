import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Messages from "@/models/message";

export async function POST(req) {
    try
    {
        const data = await req.json();
        if(!data.message || !data.number) return NextResponse.json({message: `Number/Message can't be empty`},{status:200});
        await connectToDB();
        await  Messages.create(data);
        return NextResponse.json({message: 'Message Sent Successfully'},{status:200});
    }
    catch(err){
        return NextResponse.json({message: 'Internal Server Error'},{status:500});
    }
}