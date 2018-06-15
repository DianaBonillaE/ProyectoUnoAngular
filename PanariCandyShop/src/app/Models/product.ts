import { ProductCategory } from "./product-category";

export class Product{
     productId: string;
     productName: string;
    price: string;
    unitsOnStock: string;
    description: string;
    salesTax: string;
 productCategoryId: ProductCategory;
 onCart : string;
 clientID: string;

}