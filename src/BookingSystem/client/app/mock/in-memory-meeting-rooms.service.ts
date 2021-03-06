import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MOCK_MEETING_ROOMS } from './mock-meeting-rooms';
import {MOCK_CREDENTIALS} from './mock-credentials';
import { BookingSystemService } from '../services/booking-system.service';

export class InMemoryMeetingRoomsService implements InMemoryDbService {
  createDb(): any {
    console.log('InMemoryMeetingRoomsService!!!', MOCK_MEETING_ROOMS)
    const rooms = MOCK_MEETING_ROOMS;
    const credentials = MOCK_CREDENTIALS;
    return { rooms, credentials };
  }
}
