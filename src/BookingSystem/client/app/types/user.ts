/**
 * Created by mikhail.mamonov on 8/1/2017.
 */

import { Meeting } from './meeting';

export class User {
    serverAdress: string;
    login: string;
    password: string;

    meetings?: Meeting[];
    }
