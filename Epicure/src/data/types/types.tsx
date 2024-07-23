export type popRestaurantsProps = {
    image: string,
    title: string,
    body: string,
    score: number
}

export type dishProps = {
    image: string,
    title: string,
    body: string,
    icons: string[],
    price: string,
    shekel: string
}

export const iconsDict: { [key: string]: number } = {
    spicy: 7,
    vegitarian: 8,
    vegan: 9
}