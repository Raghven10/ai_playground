import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY

});

export async function POST(
    req: Request
){
    try{
        console.log(process.env.OPENAI_API_KEY)
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if (!userId) {
            return new NextResponse("Unauthorised", {status: 401});
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key not configured", {status:500})
        }

        if (!messages) {
            return new NextResponse("messages are required", {status:400})
        }

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages
        })

    }catch(error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}