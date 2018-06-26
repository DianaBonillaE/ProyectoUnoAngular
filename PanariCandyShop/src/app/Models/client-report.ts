
export class ClientReport{
    firstName: string;
    lastName: string;
    email: string;
    buys: number;

    constructor(firstName?: string, lastName?: string, email?: string, quantity?: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.buys = quantity;
    }
}