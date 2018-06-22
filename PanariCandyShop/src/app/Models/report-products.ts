
export class ReportProducts{
    productId: number;
    productName: string;
    price: number;
    unitsOnStock: number;
    description: string;
    salesTax: number;
    productCategoryId: number;

    constructor(productId?:number, productName?:string, price?:number, unitsOnStock?:number,
        description?:string, salesTax?:number, productCategoryId?:number){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.unitsOnStock = unitsOnStock;
        this.description = description;
        this.salesTax = salesTax;
        this.productCategoryId = productCategoryId;
    }
}