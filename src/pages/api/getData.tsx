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
                "image": "https://5.imimg.com/data5/BA/LI/MY-78098890/rice-seed-500x500.jpg",
                "title": "Rice",
                "desc": "A staple food crop, rice is widely cultivated across India. (rate is per kg)",
                "category": "seeds",
                "slug": "rice",
                "price": 45
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORnIFu7DrDEDhYdgaDvvtSqtz1Nat2aMicQ&s",
                "title": "Wheat",
                "desc": "A major cereal grain, wheat is grown extensively for its seed, which is a staple food worldwide. (rate is per kg)",
                "category": "seeds",
                "slug": "wheat",
                "price": 40
            },
            {
                "image": "https://t4.ftcdn.net/jpg/04/20/45/65/360_F_420456561_nnqiDUYF07WZqD5NvxMArEfQeDhuhD9K.jpg",
                "title": "Corn",
                "desc": "Corn is a widely grown grain crop known for its versatility and nutritional value. (rate is per kg)",
                "category": "seeds",
                "slug": "corn",
                "price": 50
            },
            {
                "image": "https://5.imimg.com/data5/KG/CW/MY-61005100/gram.jpg",
                "title": "Gram",
                "desc": "Gram, also known as chickpea, is a nutritious pulse crop widely consumed in India. (rate is per kg)",
                "category": "seeds",
                "slug": "gram",
                "price": 60
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKdWpluDpoz7KckmIXV4OZKY349qJCvdHZA&s",
                "title": "Sunflower",
                "desc": "Sunflower seeds are widely cultivated for their oil content and nutritional value. (rate is per kg)",
                "category": "seeds",
                "slug": "sunflower",
                "price": 80
            },
            {
                "image": "https://st3.depositphotos.com/3997585/16413/i/450/depositphotos_164139232-stock-photo-close-up-of-urea-fertilizer.jpg",
                "title": "Urea",
                "desc": "Urea is a nitrogenous fertilizer widely used in agriculture to enhance plant growth and yield.",
                "category": "fertilizers",
                "slug": "urea",
                "price": 20
            },
            {
                "image": "https://5.imimg.com/data5/ANDROID/Default/2022/2/FX/MH/HS/23336035/product-jpeg-500x500.jpg",
                "title": "DAP",
                "desc": "Di-Ammonium Phosphate (DAP) is a popular fertilizer containing nitrogen and phosphorus, crucial for plant development.",
                "category": "fertilizers",
                "slug": "dap",
                "price": 25
            },
            {
                "image": "https://m.media-amazon.com/images/I/41tXS6e+RrL.jpg",
                "title": "MOP",
                "desc": "Muriate of Potash (MOP) is a potassium-rich fertilizer essential for improving crop quality and yield.",
                "category": "fertilizers",
                "slug": "mop",
                "price": 22
            },
            {
                "image": "https://4.imimg.com/data4/HT/WB/MY-8375560/single-super-phosphate-fertilizer.jpg",
                "title": "Superphosphate",
                "desc": "Superphosphate is a phosphate fertilizer that promotes root growth and flowering in plants.",
                "category": "fertilizers",
                "slug": "superphosphate",
                "price": 18
            },
            {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwPPcJk0w5Mg90hk3yA_Pp-VfFMICPgR_pg&s",
                "title": "NPK",
                "desc": "NPK fertilizer provides a balanced supply of nitrogen, phosphorus, and potassium, essential nutrients for healthy plant growth.",
                "category": "fertilizers",
                "slug": "npk",
                "price": 30
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