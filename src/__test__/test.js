import Team from '../js/Team';
import Character from '../js/Character';

test('Test iterators', () => {
  const standard = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Мечник',
      type: 'Swordsman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Маг',
      type: 'Magician',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];

  const char1 = new Character('Лучник', 'Bowman');
  const char2 = new Character('Мечник', 'Swordsman');
  const char3 = new Character('Маг', 'Magician');
  const team = new Team(char1, char2, char3);

  expect([...team]).toEqual(standard);
});
