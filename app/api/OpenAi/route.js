import { NextResponse } from "next/server";
import { OpenAI } from "openai";




// Named export, no "default"
export async function POST(request) {
      const body = await request.json()
    const {question} = body;
    console.log(process.env.NEXT_PUBLIC_OPEN_AI_API )

    try {
        const client = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API });

        const response = await client.responses.create({
            model: "gpt-4o",
            input: question
        });

        return NextResponse.json({ message: response.output_text }, { status: 200 });

    }
    catch (e) {
        // console.log(e)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
}
