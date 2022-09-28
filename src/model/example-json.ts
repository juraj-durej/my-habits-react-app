const js =[ //IHabit
  {
    id: 'number',
    name: 'string',
    description: 'string',
    endDate: 'string',
    active: 'boolean',
    habitRepetitions: [ //IHabitRepetition
      {
        id: 'number',
        everyNthDay: 'number',
        everyNthMinute: 'number',
        everyNthMinuteCount: 'number',
        allowRemind: 'boolean',
        remindMinutesBefore: 'number',
        timeStart: 'string',
        dateStart: 'string',
        dateEnd: 'string',
        active: 'boolean',
        habitCompleted: [ //IHabitCompleted
          {
            id: 'number',
            completedAt: 'string'
          }
        ]
      }
    ]
  }
]