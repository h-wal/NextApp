"use client"
import { useState } from "react"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest){

    const body = await req.json();

    const username = body.username;
    const password = body.password;

    const userID = 1;
    const token = jwt.sign({
        userID
    }, "SECRET")

    return NextResponse.json({
        "token": token
    })
}


export  function signup({params}: any){
    const postId = params.blog;
    console.log(postId)
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("")
    return(
        <div className="border border-white rounded-2xl h-screen w-screen m-5 p-5 flex justify-center items-center">
            <div className="flex flex-col gap-2 border border-white rounded-2xl w-96 h-96 p-5 justify-center items-center">
                <div className="text-lg">
                    SIGN IN {postId}
                </div>
                <div className="border border-white rounded-2xl p-2">
                    <input type="username" placeholder="username" onChange={e => setusername(e.target.value)} />
                </div>
                <div className="border border-white rounded-2xl p-2">
                    <input type="password" placeholder="password" onChange={e => setpassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => {
                        console.log(username, password)
                    }} className="border border-white p-2 rounded-2xl cursor-pointer">SignUp</button>
                </div>
            </div>
        </div>
    )
}