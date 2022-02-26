import { faCocktail ,faPersonHiking,faVanShuttle , faBeerMugEmpty, faL} from "@fortawesome/free-solid-svg-icons"
import image_12 from './Image/room-12.jpeg';
import image_11 from './Image/room-11.jpeg';
import image_10 from './Image/room-10.jpeg';
import image_9 from './Image/room-9.jpeg';
import image_8 from './Image/room-8.jpeg';
import image_7 from './Image/room-7.jpeg';
import image_6 from './Image/room-6.jpeg';
import image_5 from './Image/room-5.jpeg';
import image_4 from './Image/room-4.jpeg';
import image_3 from './Image/room-3.jpeg';
import image_2 from './Image/room-2.jpeg';
import image_1 from './Image/room-1.jpeg';
import imgDeta_4 from './Image/details-4.jpeg';
import imgDeta_3 from './Image/details-3.jpeg';
import imgDeta_2 from './Image/details-2.jpeg';
import imgDeta_1 from './Image/details-1.jpeg';
export default [
    {
        services:[
            {
                icon:faCocktail,
                title:"free cocktails",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting."
            },
            {
                icon:faPersonHiking,
                title:"endless hiking",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting."
            },
            {
                icon:faVanShuttle,
                title:"free shuttle",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting."
            },
            {
                icon:faBeerMugEmpty,
                title:"strongest beer",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting."
            }
        ]
    },
    {
        rooms:[
            {
                id:1,
                title:"family deluxe",
                main_img:image_12,
                price:500,
                size:700,
                capacity:6,
                pets:true,
                breakfast:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:2,
                title:"double deluxe",
                main_img:image_8,
                price:400,
                size:600,
                capacity:3,
                pets:true,
                breakfast:true,
                images:[image_1,image_2,image_3],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:3,
                title:"single deluxe",
                main_img:image_4,
                price:300,
                size:400,
                capacity:1,
                pets:true,
                breakfast:true,
                images:[image_9,image_7,image_5],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            }
        ]
    },
    {
        allRoomsData:[
            {
                id:1,
                main_img:image_1,
                price:600,
                title:"triple",
                guests:"2",
                size:"2000",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:2,
                main_img:image_2,
                price:500,
                title:"triple",
                guests:"3",
                size:"1500",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:3,
                main_img:image_3,
                price:400,
                title:"triple",
                guests:"1",
                size:"2500",
                isBreakfast:true,
                isPets:false,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:4,
                main_img:image_4,
                price:600,
                title:"family",
                guests:"5",
                size:"2800",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:5,
                main_img:image_5,
                price:550,
                title:"family",
                guests:"4",
                size:"2300",
                isBreakfast:true,
                isPets:false,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:6,
                main_img:image_6,
                price:480,
                title:"family",
                guests:"2",
                size:"2000",
                isBreakfast:false,
                isPets:false,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:7,
                main_img:image_7,
                price:300,
                title:"double",
                guests:"3",
                size:"1000",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:8,
                main_img:image_8,
                price:400,
                title:"double",
                guests:"2",
                size:"2000",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:9,
                main_img:image_9,
                price:500,
                title:"double",
                guests:"2",
                size:"1800",
                isBreakfast:false,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:10,
                main_img:image_10,
                price:100,
                title:"single",
                guests:"1",
                size:"1000",
                isBreakfast:true,
                isPets:false,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:11,
                main_img:image_11,
                price:200,
                title:"single",
                guests:"2",
                size:"2000",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            },
            {
                id:12,
                main_img:image_12,
                price:500,
                title:"single",
                guests:"2",
                size:"2000",
                isBreakfast:true,
                isPets:true,
                images:[imgDeta_4,imgDeta_3,imgDeta_2],
                extras: [
                    "Plush pillows and breathable bed linens",
                    "Soft, oversized bath towels",
                    "Full-sized, pH-balanced toiletries",
                    "Complimentary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Comfortable beds"
                    ],
                details:"Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
            }
        ]
    }
]