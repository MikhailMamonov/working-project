/**
 * Created by mikhail.mamonov on 8/1/2017.
 */
import * as moment from 'moment';
import { Moment } from 'moment';

import { Meeting } from './meeting';

export class SettingsForm {
    serverAdress: string;
    login: string;
    password: string;

    meetings?: Meeting[];
    }
