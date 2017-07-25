// NOTE: We are using ISO 8601 for both times and durations.

import * as moment from 'moment';

export const MOCK_MEETING_ROOMS = [
  // Occupied, no next meeting:
  {
    id: 1, name: 'Room #1 -- Foo', meetings: [
      { startTime: moment().subtract(1, 'hour').toISOString(), duration: 'PT1H23M', user: 'John', description: 'Lorem ipsum' },
    ]
  },
  // Occupied, has next meeting:
  {
    id: 2, name: 'Room #2 -- Bar', meetings: [
      { startTime: moment().subtract(1, 'hour').toISOString(), duration: 'PT1H23M', user: 'Jane', description: 'Dolor sit amet' },
      { startTime: moment().add(4, 'hours').toISOString(), duration: 'PT2H34M', user: 'Jake', description: 'Consectetur adipiscing elit' },
    ]
  },
  // Available, has next meeting:
  {
    id: 5, name: 'Room #5 -- Goo', meetings: [
    { startTime: moment().add(1, 'hours').toISOString(), duration: 'PT1H23M', user: 'Jane', description: 'Dolor sit amet' },
  ]
  },
  // Available, data expired:
  {
    id: 4, name: 'Room #4 -- Hoo', meetings: [
      { startTime: '2017-01-25T12:34+03:00', duration: 'PT1H23M', user: 'Jane', description: 'Dolor sit amet' },
      { startTime: '2017-01-25T16:20+03:00', duration: 'PT2H34M', user: 'Jake', description: 'Consectetur adipiscing elit' },
    ]
  },
  // Available, no meetings:
  {
    id: 3, name: 'Room #3 -- Baz'
  },
];
