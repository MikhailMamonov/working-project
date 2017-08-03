/**
 * Created by mikhail.mamonov on 8/1/2017.
 */


export class User {
    exchangeServer: string;
    login: string;
    password: string;
    constructor(exchangeServer:string, login: string, password: string) {
        this.login = login;
        this.password = password;
        this.exchangeServer = exchangeServer;
    }
}