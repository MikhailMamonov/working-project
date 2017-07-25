import * as moment from 'moment';
import { Moment } from 'moment';

import { Meeting } from './meeting';

export class MeetingRoom {
  id: string;
  name: string;

  meetings?: Meeting[];

  static isOccupiedNow(room: MeetingRoom): boolean {
    if (MeetingRoom.hasMeetings(room)) {
      if (MeetingRoom.currentMeeting(room)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  static hasMeetings(room: MeetingRoom): boolean {
    return room.meetings && room.meetings.length > 0;
  }

  static hasNextMeeting(room: MeetingRoom): boolean {
    if (MeetingRoom.nextMeeting(room)) {
      return true;
    } else {
      return false;
    }
  }

  static currentMeeting(room: MeetingRoom): Meeting | undefined {
    const now = moment();

    return MeetingRoom.meetingAt(room, now);
  }

  static meetingAt(room: MeetingRoom, dateTime: Moment): Meeting | undefined {
    if (MeetingRoom.hasMeetings(room)) {
      return room.meetings.find(meeting => {
        return Meeting.isHappeningAt(meeting, dateTime);
      });
    } else {
      return undefined;
    }
  }

  static nextMeeting(room: MeetingRoom): Meeting | undefined {
    // If we have meetings for this room:
    if (MeetingRoom.hasMeetings(room)) {
      // Find current (if exists):
      const now = moment();
      const currentMeeting = MeetingRoom.meetingAt(room, now);

      // If we have `currentMeeting':
      if (currentMeeting) {
        // Return first meeting after current (or undefined):
        return room.meetings.find(meeting => {
          return Meeting.endTime(currentMeeting).isBefore(Meeting.startTime(meeting));
        });
      } else {
        // Return first meeting with start time greater than now (or undefined):
        return room.meetings.find(meeting => {
          return now.isBefore(Meeting.startTime(meeting));
        });
      }
    } else {
      // No meetings for this room at all, so there is no next meeting:
      return undefined;
    }
  }
}
