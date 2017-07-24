import * as moment from 'moment';

export class Meeting {
  startTime: string;

  duration: string;

  user: string;

  description: string;

  isHappeningNow(): boolean {
    const now = moment();
    const startTime = moment(this.startTime, moment.ISO_8601);
    const endTime = startTime.add(moment(this.duration, moment.ISO_8601));

    console.log(now, startTime, endTime);

    return false;
  }
}
