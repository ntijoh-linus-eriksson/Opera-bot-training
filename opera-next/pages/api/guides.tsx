import { NextApiRequest, NextApiResponse } from "next";

export default function getAllGuides(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({message: "Expected GET request, received {req.method}"})
    }
    res.json({hello: "world", method: req.method})
}