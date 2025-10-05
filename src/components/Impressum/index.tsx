import React from 'react';
import { Container, Title, Text, Paper, Stack } from '@mantine/core';

export function Impressum(): React.JSX.Element {
  return (
    <Container size="md" my="xl">
      <Paper shadow="xs" p="xl">
        <Stack gap="md">
          <Title order={1}>Impressum</Title>

          <div>
            <Title order={2} size="h3" mb="xs">
              Angaben gemäß § 5 TMG
            </Title>
            <Text size="md">
              [Ihr Name/Firmenname]<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Kontakt
            </Title>
            <Text size="md">
              Telefon: [Ihre Telefonnummer]<br />
              E-Mail: [Ihre E-Mail-Adresse]
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Haftungsausschluss
            </Title>
            <Text size="sm" c="dimmed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}
