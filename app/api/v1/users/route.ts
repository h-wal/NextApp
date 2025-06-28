import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export async function post(req: NextRequest){

    const data = await req.json();

    console.log(data)


    return NextResponse.json({
        message: "you are signed Up!"
    })
}