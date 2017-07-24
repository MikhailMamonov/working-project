import { Meeting } from './meeting';

export class MeetingRoom {
  id: string;
  name: string;
  meetings?: Meeting[];
}
