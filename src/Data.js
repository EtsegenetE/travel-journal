import funnji from "./image/funnji.jpg";
import geiranger from "./image/geiranger.jpg";
import Sydney from "./image/Sydney.webp";





const Data = [
    {
        id: 1,
        img: { 
            src: funnji,
            alt: "mount funji"
        },
        title: "Mount Fuji",
        country: "Japan",
        googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
        dates: "12 Jan, 2021 - 24 Jan, 2021",
        text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        id: 2,
        img: {
            src: geiranger,
            alt: "Geirangerfiord"
        },
        title: "Geirangerfjord",
        country: "Norway",
        googleMapsLink: "https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",
        dates: "01 Oct, 2021 - 18 Nov, 2021",
        text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    },
    {
        id: 3,
        img: {
            src: Sydney,
            alt: "sydney opera house"
        },
        title: "Sydney Opera House",
        country: "Australia",
        googleMapsLink: "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",
        dates: "27 May, 2021 - 8 Jun, 2021",
        text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    
]

export default Data;