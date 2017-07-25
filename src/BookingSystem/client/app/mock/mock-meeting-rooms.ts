// NOTE: We are using ISO 8601 for both times and durations.

export const MOCK_MEETING_ROOMS = [
  {
    id: 1, name: 'Room #1 -- Foo', meetings: [
      { startTime: '2017-07-25T12:34+03:00', duration: 'PT8H12M', user: 'John', description: 'Lorem ipsum' },
    ]
  },
  {
    id: 2, name: 'Room #2 -- Bar', meetings: [
      { startTime: '2017-07-25T13:37+03:00', duration: 'PT1H23M', user: 'Jane', description: 'Dolor sit amet' },
      { startTime: '2017-07-25T18:37+03:00', duration: 'PT2H23M', user: 'Jake', description: 'Consectetur adipiscing elit' },
    ]
  },
  {
    id: 3, name: 'Room #3 -- Baz'
  },
];
