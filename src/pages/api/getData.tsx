import type { NextApiRequest, NextApiResponse } from 'next'

interface Item {
    img: string,
    price: number,
    category: string,
    title: string,
    desc: string
}

type ResponseData = {
    data: Item[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json({ data: [] })
}