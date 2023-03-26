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

export interface IConstructor {
    _id: string;
    name: string;
    image: string;
    price: number;
    cartId: number;
}

export interface IUserAuth {
    name: string;
    email: string;
    password?: string
}