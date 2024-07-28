export interface CardProps {
    cardNumber: number;
    image: string;
    title: string;
    body?: string;
    icons?: string[];
    shekel?: string;
    price?: string;
    score?: number;
    responsiveDisplay?: boolean;
}
