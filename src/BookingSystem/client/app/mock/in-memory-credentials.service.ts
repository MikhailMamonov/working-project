/**
 * Created by mikhail.mamonov on 8/4/2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {MOCK_CREDENTIALS} from './mock-credentials';

export class InMemoryCredentialsService implements InMemoryDbService {
    createDb(): any {
        const credentials = MOCK_CREDENTIALS;

        return { credentials };
    }
}