export interface IOrderType {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: "done" | "pending" | "created";
    _id: string;
}
export interface IIngredient {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
    _id: string;
}