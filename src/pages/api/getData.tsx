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
                "desc": "Used for digging soil, removing rocks, and cleaning grain silos",
                "category": "tools",
                "slug": "shovel",
                "price": 799
            },
            {
                title: "Spade",
                desc: "Similar to a shovel, used for digging and turning soil.",
                category: "tools",
                slug: "spade",
                price: 799,
                image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353897278/LN/JU/GD/30387361/wooden-handle-garden-spade.jpg"
            },
            {
                title: "rake",
                desc: "Used for leveling soil, collecting leaves, and removing debris.",
                category: "tools",
                slug: "rake",
                price: 699,
                image: "https://m.media-amazon.com/images/I/61VaZBaQZUL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                "title": "bolo",
                "desc": "A long heavy single-edged knife used for clearing vegetation, chopping wood, and other agricultural tasks.",
                "category": "tools",
                "slug": "bolo",
                "price": 1200,
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBeemRezCmbhaV2N9frQV-t4qhUrT2-b7tA&s"
            },
            {
                "title": "sickle",
                "desc": "A hand-held agricultural tool with a curved blade used for harvesting crops or cutting grass.",
                "category": "tools",
                "slug": "sickle",
                "price": 300,
                "image": "https://t3.ftcdn.net/jpg/00/39/48/56/360_F_39485626_cTYh5MXWVB8Lj26YGjTOwumLeW22S04v.jpg"
            },            
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "category": "seeds",
                "slug": "shovelseeds",
                "price": 500
            },
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "slug": "shovelfertilizers",
                "category": "fertilizers",
                "price": 500
            },
            {
                "image": "https://gizacon.com/cdn/shop/products/UP-168-P_37c88cf4-a350-4f29-8294-2732e03efd9a_360x.jpg?v=1613559519",
                "title": "shovel",
                "desc": "shovel",
                "category": "pesticides",
                "slug": "shovelpesticides",
                "price": 500
            },
        ]
    })
}