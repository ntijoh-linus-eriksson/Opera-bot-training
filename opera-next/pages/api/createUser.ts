import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma"

export default async function getAllGuides(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({message: "Method not allowed"})
    }
    
    try {
        const { user } = req.body
        const savedUser = await prisma.user.create({
            data:user
        })
        res.status(200).json(savedUser)
    }   catch (error) {
        res.status(400).json({ message: 'something went wrong'})
    }
}