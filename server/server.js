Meteor.startup(function () {
  if (Poops.find().count() === 0) {
    let poops = [
      {'title': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.'},
      {'title': 'All dubstep all the time',
        'description': 'Get it on!'},
      {'title': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];
    for (let i = 0; i < poops.length; i++)
      Poops.insert(poops[i]);
  }
});
