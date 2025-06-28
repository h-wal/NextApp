import axios from "axios"
import Link from "next/link"

export default async function Home(){

    const user = axios.get("http://localhost:3000/api/v1/users")

    return(
        <div className="flex flex-col w-screen h-screen">
            <div className="text-lg flex items-center justify-center">
                Todo Application
            </div>

            <span className="text-white border border-white p-2">
                <Link href="/signup">SignUp</Link>
            </span>
            <span className="text-white border border-white p-2">
                <Link href="/signin">SignIn</Link>
            </span>
        </div>
    )
}