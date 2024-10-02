import Product from "../products/product"

const products: Product[] = [
    {
        id: 1,
        title: 'STOLENCARZ SHIRT',
        description: 'STOLENCARZ - STILL RIDIN TAPE PROMO SHIRT',
        category: 'SHIRT',
        image: 'https://instagram.fcwb7-1.fna.fbcdn.net/v/t51.29350-15/447302070_383446660784082_7868096392713501674_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcwb7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8R-wbCZo_iMQ7kNvgEDn1FU&_nc_gid=a450699e1236495b9aa148ba4a22a485&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4MTUzMTQ2NzY4MjI4NzYyMQ%3D%3D.3-ccb7-5&oh=00_AYAd51JsuwQ5UUutuUS5BSsNJuQgwuhVwU1e9DJl2TPWRw&oe=67031663&_nc_sid=7a9f4b',
        tags: ['PROMO'],
        price: 100,
        discountPercentage: 20,
        discountedPrice: 80,
        originalPrice: 100,
        expecifications: {
            main: 'STILL RIDIN',
            sizes: ['S', 'M', 'L', 'XL'],
            material: '100% Cotton',
            color: 'Black',
        },
        rating: {
            rate: 4.5,
            count: 100,
        },
    }
]

export default products