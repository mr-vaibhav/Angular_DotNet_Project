export class IClient {
    ClientId: number ;
    FirstName: string;
    LastName: string;
    DOB: string;
    getAddress : IClientAddress[];
}

export class IClientAddress {
    Id:number;
    Address : string;
    ClientId : number;
}