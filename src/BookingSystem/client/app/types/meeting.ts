import * as moment from 'moment';
import { Moment } from 'moment';

export class Meeting {
  startTime: string;
  duration: string;

  user: string;
  description: string;

  static isHappeningNow(meeting: Meeting): boolean {
    const now = moment();

    return Meeting.isHappeningAt(meeting, now);
  }

  static isHappeningAt(meeting: Meeting, dateTime: Moment): boolean {
    const startTime = Meeting.startTime(meeting);
    const endTime = Meeting.endTime(meeting);

    return dateTime.isBetween(startTime, endTime, null, '[]');
  }

  static startTime(meeting: Meeting): Moment {
    return moment(meeting.startTime, moment.ISO_8601);
  }

  static endTime(meeting: Meeting): Moment {
    return moment(meeting.startTime).add(moment.duration(meeting.duration));
  }
}
