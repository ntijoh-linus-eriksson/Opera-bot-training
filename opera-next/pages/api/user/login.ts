import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"

export default async function getAllGuides(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: "Method not allowed"})
    }
    
    try {
        const input = req.body
        console.log( input )
        const user = await prisma.user.findUnique({
            where: { email: input.email }
        })
 
        if (!user || !(user.password === input.password)) {
            return res.status(400).json({ message: 'Wrong email or password' })
        }

        res.status(200).json(user)
    }   
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error})
    }
}