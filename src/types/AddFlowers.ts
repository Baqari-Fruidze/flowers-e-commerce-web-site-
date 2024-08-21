export interface TaddFlowers{
    id: number,
    name: string,
    price: number,
    category: {id: number, name: string, bg_picture: string},
    description: string,
    inStock: number,
    src: string
}