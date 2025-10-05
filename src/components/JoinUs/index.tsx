import React from 'react';
import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  List,
  ThemeIcon,
  Box,
  Divider,
} from '@mantine/core';
import {
  IconPlant,
  IconDatabase,
  IconLanguage,
  IconSpeakerphone,
} from '@tabler/icons-react';

export function JoinUs(): React.JSX.Element {
  return (
    <Container size="md" my="xl">
      <Paper shadow="xs" p="xl">
        <Stack gap="xl">
          <div>
            <Title order={1} mb="md">
              Mach mit bei <span dir="ltr">GreenRoots e.V.</span>! 🌱
            </Title>
            <Text size="md" mb="md">
              Du möchtest nicht nur zuschauen, sondern aktiv zum Klimaschutz
              beitragen? Dann werde Teil unseres ehrenamtlichen Netzwerks!
            </Text>
            <Text size="md" mb="md">
              Bei <span dir="ltr">GreenRoots e.V.</span> kannst du deine Zeit, dein Wissen und deine
              Energie einsetzen, um echte Veränderungen anzustoßen:
            </Text>
          </div>

          <List spacing="md" size="md">
            <List.Item
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <IconDatabase size={16} />
                </ThemeIcon>
              }
            >
              <Text fw={600} span>
                Datenaufbereitung:
              </Text>{' '}
              Hilf uns, Emissionen von Unternehmen und Ländern transparent
              aufzubereiten.
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <IconLanguage size={16} />
                </ThemeIcon>
              }
            >
              <Text fw={600} span>
                Übersetzungen:
              </Text>{' '}
              Unterstütze uns dabei, unsere Informationen international
              zugänglich zu machen.
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <IconSpeakerphone size={16} />
                </ThemeIcon>
              }
            >
              <Text fw={600} span>
                Öffentlichkeitsarbeit:
              </Text>{' '}
              Teile unsere Botschaft und hilf, mehr Menschen zu erreichen.
            </List.Item>
          </List>

          <div>
            <Text size="md" mb="md">
              Ob ein paar Stunden pro Monat oder regelmäßige Unterstützung –
              jedes Engagement zählt. Gemeinsam pflanzen wir die Wurzeln für
              eine klimafreundliche Zukunft.
            </Text>
            <Text size="md" fw={500}>
              👉 Schreib uns einfach an{' '}
              <Text component="a" href="mailto:ehrenamt@greenroots-ev.de" c="blue">
                ehrenamt@greenroots-ev.de
              </Text>{' '}
              und werde Teil unseres Teams!
            </Text>
          </div>

          <Divider my="md" />

          <div>
            <Title order={2} size="h2" mb="md">
              Unterstütze uns auch finanziell
            </Title>
            <Text size="md" mb="md">
              Wenn du zusätzlich zu deiner Zeit etwas beitragen möchtest, freuen
              wir uns über Spenden:
            </Text>

            <Box
              p="md"
              style={{
                backgroundColor: 'var(--mantine-color-gray-0)',
                borderRadius: 'var(--mantine-radius-md)',
              }}
            >
              <Stack gap="xs">
                <Text size="md" fw={600} dir="ltr">
                  GreenRoots e.V.
                </Text>
                <Text size="sm">Musterstraße 12</Text>
                <Text size="sm" mb="sm">
                  12345 Beispielstadt
                </Text>
                <Text size="sm">
                  <Text fw={600} span>
                    IBAN:
                  </Text>{' '}
                  DE12 3456 7890 1234 5678 90
                </Text>
                <Text size="sm">
                  <Text fw={600} span>
                    BIC:
                  </Text>{' '}
                  GENODEF1BEX
                </Text>
                <Text size="sm">
                  <Text fw={600} span>
                    Verwendungszweck:
                  </Text>{' '}
                  „Spende Klimaschutz"
                </Text>
              </Stack>
            </Box>

            <Text size="md" mt="md">
              Jede Spende hilft uns, Projekte umzusetzen, Aufklärungsarbeit zu
              leisten und unsere Vision einer nachhaltigen Zukunft zu
              verwirklichen. 🌍
            </Text>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}
