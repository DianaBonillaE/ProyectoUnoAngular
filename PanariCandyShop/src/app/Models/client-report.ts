
export class ClientReport{
    firstName: string;
    lastName: string;
    email: string;
    quantity: number;

    constructor(firstName?: string, lastName?: string, email?: string, quantity?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.quantity = quantity;
    }
}