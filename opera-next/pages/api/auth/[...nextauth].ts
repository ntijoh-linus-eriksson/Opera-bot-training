import CredentialsProvider from "next-auth/providers/credentials";
import nextAuth, { NextAuthOptions } from "next-auth";
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
prisma = new PrismaClient();

export const authOptions:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {

            },
            async authorize(credentials, req) {
              const {username, password} = credentials as any

              prisma.user.findUnique({where: {
                username: username
              }})
            }
          })
    ],
}

export default nextAuth(authOptions)