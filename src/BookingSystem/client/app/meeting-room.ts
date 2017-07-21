export class Meeting {
  startTime: string;
  duration: string;
}

export class MeetingRoom {
  id: string;
  name: string;
  meetings?: Meeting[];
}
