import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from "../../utils/prisma"
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&@%$#', 10)

type Data = {
  message: string,
  status: number,
  shortenedUrl: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const urlAdded = await prisma.urls.create({
    data: {
      originalUrl: req.body.url,
      shortenedUrl: nanoid()
    },
  });

  if(urlAdded && urlAdded.id){
    res.status(200).json({ status: 200, message:'Added to DB.', shortenedUrl: urlAdded.shortenedUrl })
  } else {
    res.status(400).json({status: 400, message: 'Couldnt add entry to DB.', shortenedUrl: null})
  }
}
