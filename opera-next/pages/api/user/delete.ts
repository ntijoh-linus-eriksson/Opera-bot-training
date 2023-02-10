import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"

export default async function getAllGuides(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        res.status(405).json({message: "Method not allowed"})
    }
    
    try {
        const { id } = req.body
        console.log( id )
        const user = await prisma.user.delete({
            where: { id }
        })
 
        if (!id) {
            return res.status(400).json({ message: 'How do you not have an id?' })
        }

        res.status(200).json(user)
    }   
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error})
    }
}