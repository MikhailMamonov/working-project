import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MOCK_MEETING_ROOMS } from './mock-meeting-rooms';

export class InMemoryMeetingRoomsService implements InMemoryDbService {
  createDb(): any {
    const room = MOCK_MEETING_ROOMS;

    return { room };
  }
}
