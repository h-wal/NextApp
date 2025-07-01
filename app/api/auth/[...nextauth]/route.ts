import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { CredentialsProvider } from "next-auth/providers/credentials";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
  CredentialsProvider({
    name: 'Login in with email',

    credentials: {
      username: { label: "Username", type: "text", placeholder: "username" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
]
});

export {handler as GET , handler as POST}