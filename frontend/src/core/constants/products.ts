import Product from "../products/product";

const products: Product[] = [
  {
    id: 1,
    title: "STOLENCARZ SHIRT",
    description: "STOLENCARZ - STILL RIDIN TAPE PROMO SHIRT",
    category: "SHIRT",
    image:
      "https://instagram.fcwb7-1.fna.fbcdn.net/v/t51.29350-15/447302070_383446660784082_7868096392713501674_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcwb7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8R-wbCZo_iMQ7kNvgEDn1FU&_nc_gid=a450699e1236495b9aa148ba4a22a485&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4MTUzMTQ2NzY4MjI4NzYyMQ%3D%3D.3-ccb7-5&oh=00_AYAd51JsuwQ5UUutuUS5BSsNJuQgwuhVwU1e9DJl2TPWRw&oe=67031663&_nc_sid=7a9f4b",
    tags: ["PROMO"],
    price: 100,
    discountPercentage: 20,
    discountedPrice: 80,
    originalPrice: 100,
    expecifications: {
      main: "STILL RIDIN",
      sizes: ["S", "M", "L", "XL"],
      material: "100% Cotton",
      color: "Black",
    },
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: 2,
    title: "DJ SMOKEY SHIRT",
    description: "DJ SMOKEY 1017 SHIRT",
    category: "SHIRT",
    image:
      "https://instagram.fcwb7-1.fna.fbcdn.net/v/t51.29350-15/438531488_937071101255376_3936890530564475647_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcwb7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=FTAO8YbH9Z8Q7kNvgH17xWs&_nc_gid=a579c1fa56204b28adeddc06868b7576&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM0ODUxNzk5NDA4OTIzMjU2Ng%3D%3D.3-ccb7-5&oh=00_AYAPG6WCi2rs1wh-e5f-YwPgV-SMVuUrGnq4FLJn_hpz7w&oe=670892B4&_nc_sid=22de04",
    tags: ["PROMO"],
    price: 110,
    discountPercentage: 30,
    discountedPrice: 77,
    originalPrice: 110,
    expecifications: {
      main: "DJ SMOKEY 1017",
      sizes: ["S", "M", "L", "XL"],
      material: "100% Cotton",
      color: "Black",
    },
    rating: {
      rate: 4.0,
      count: 87,
    },
  },
];

export default products;
