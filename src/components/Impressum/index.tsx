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
            <Text size="md" dir="ltr">
              GreenRoots e.V.<br />
              Musterstraße 12<br />
              12XXX Berlin
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Vertreten durch
            </Title>
            <Text size="md">
              Dr. Maria Mustermann (Vorstandsvorsitzende)
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Kontakt
            </Title>
            <Text size="md">
              E-Mail: kontakt@greenroots-ev.XX<br />
              Telefon: +49 (0)30 1234567
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Registereintrag
            </Title>
            <Text size="md">
              Eingetragen im Vereinsregister.<br />
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: VR XXXXX
            </Text>
          </div>

          <div>
            <Title order={2} size="h3" mb="xs">
              Umsatzsteuer-ID
            </Title>
            <Text size="md">
              DE123456789 (fiktiv)
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
