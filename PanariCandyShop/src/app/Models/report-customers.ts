export class ReportCustomers{
    firstName : string;
    lastName : string;
    email : string;
    quantity : string;

    constructor(firstName?:string, lastName?: string, email?: string, quantity?: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.quantity = quantity;
    }
}