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

export enum EStatus {
    ACTIVE = "active",
    DELETED = "deleted",
  }