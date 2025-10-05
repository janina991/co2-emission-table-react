import React from 'react';
import { Text } from '@mantine/core';
import './stats-group.css';

const data = [
  {
    title: 'Erfasste CO2-Emissionen',
    stats: '456.133 kg',
    description:
      '24% mehr als im Vorjahresmonat und 33% mehr als vor zwei Jahren',
  },
  {
    title: 'Aktive Mitwirkende',
    stats: '2.175',
    description:
      '13% weniger als im Vormonat, aber 6% höheres Engagement neuer Nutzer',
  },
  {
    title: 'Reduktionsmaßnahmen',
    stats: '1.994',
    description:
      'In diesem Monat wurden 1.994 Maßnahmen umgesetzt mit 97% Erfolgsquote',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={'stat'}>
      <Text className={'count'}>{stat.stats}</Text>
      <Text className={'title'}>{stat.title}</Text>
      <Text className={'description'}>{stat.description}</Text>
    </div>
  ));
  return <div className={'stat-group'}>{stats}</div>;
}
