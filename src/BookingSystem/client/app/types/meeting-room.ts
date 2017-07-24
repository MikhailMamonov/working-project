import { Meeting } from './meeting';

export class MeetingRoom {
  id: string;

  name: string;

  meetings?: Meeting[];

  isOccupiedNow(): boolean {
    return false;
  }

  nextMeeting(): Meeting | undefined {
    if (this.hasNextMeeting()) {
      return this.meetings[0];
    } else {
      return undefined;
    }
  }

  hasNextMeeting(): boolean {
    if (this.meetings && this.meetings.length > 0) {
      if (this.meetings.length === 1) {
        return true;
      }
    } else {
      return false;
    }
  }
}
