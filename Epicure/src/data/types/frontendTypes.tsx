export type popularRestaurantsProps = {
    id: string,
    image: string,
    title: string,
    body: string,
    score: number
}

export type dishProps = {
    id: string,
    image: string,
    title: string,
    body: string,
    icons: string[],
    price: string,
    shekel: string
}

export type chefOfTheWeekRestaurantsProps = {
    id: string,
    image: string,
    title: string
}

export enum iconsDict {
    spicy = 7,
    vegitarian = 8,
    vegan = 9
}