import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemProps } from '../_app'

type ResponseData = {
    data: ItemProps[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json({
        data: [
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "category": "tools",
                "slug":"shoveltools",
                "price": 500
            },
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "category": "seeds",
                "slug":"shovelseeds",
                "price": 500
            },
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "slug":"shovelfertilizers",
                "category": "fertilizers",
                "price": 500
            },
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "category": "pesticides",
                "slug":"shovelpesticides",
                "price": 500
            },
        ]
    })
}