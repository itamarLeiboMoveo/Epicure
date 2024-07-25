export type Restaurant = {
    _id: string;
    title: string;
    image: string;
    chef: Chef;
    rating: number;
    dishes: Dish[];
    signatureDish: Dish;
    isPopular: boolean;
    status: EStatus;
}

export type Chef = {
    _id: string;
    title: string;
    image: string;
    description: string;
    restaurants: Restaurant[];
    isChefOfTheWeek: boolean;
    status: EStatus;
}

export type Dish = {
    _id: string;
    title: string;
    image: string;
    ingredients: string[];
    tags: string[];
    price: string;
    restaurant: Restaurant;
    status: EStatus;
}

export type popRestaurantsProps = {
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

export const iconsDict: { [key: string]: number } = {
    spicy: 7,
    vegitarian: 8,
    vegan: 9
}

export enum EStatus {
    ACTIVE = "active",
    DELETED = "deleted",
  }