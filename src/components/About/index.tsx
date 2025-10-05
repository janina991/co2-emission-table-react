import React from 'react';
import { Container, Title, Text, Paper, Stack } from '@mantine/core';
import { StatsGroup } from './StatsGroup';

export function About(): React.JSX.Element {
  return (
    <Container size="md" my="xl">
      <Stack gap="xl">
        <StatsGroup />

        <Paper shadow="xs" p="xl">
          <Title order={1} mb="lg">
            Über das Projekt
          </Title>
          <Text size="md" mb="md">
            Diese Anwendung zeigt CO2-Emissionsdaten in einer interaktiven
            Tabelle.
          </Text>
          <Text size="md" mb="md">
            Sie können die Daten durchsuchen, sortieren und filtern, um die
            Informationen zu finden, die Sie benötigen.
          </Text>
          <Text size="md">
            Das Projekt wurde mit React, TypeScript und Mantine UI erstellt.
          </Text>
        </Paper>
      </Stack>
    </Container>
  );
}
