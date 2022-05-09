import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "../../utils/prisma"


type Data = {
  url: string | undefined,
  message: string,
  status: number
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const result = await prisma.urls.findUnique({ where: {shortenedUrl: req.body.shortenedUrl}})
  // prisma.$disconnect();

  if(result && result.originalUrl){
    res.status(200).json({ status: 200, message:'Success.', url: result.originalUrl })
  } else {
    res.status(400).json({status: 400, message: 'Couldnt find in db.', url: null})
  }
}