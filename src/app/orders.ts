import { Product } from "./productsmodel";

export class Order{
    products: Product[] = [];
    constructor(products:Product[]){
        this.products = products;
    }
}

export const orders : Order[] = [

]

