
export class Card{
    ccNum:string = "";
    ccCVV:string = "";
    ccExp: string= "";
}

export class User{
    match:boolean;
    id:string = "";
    displayName:string = '';
    username:string = '';
    password:string = '';
    level:number = 2;
    cart:string[] = [];
    billing:Card = new Card();
    
}