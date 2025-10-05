import React from 'react';
import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Button,
  Center,
  Image,
} from '@mantine/core';
import { IconUserPlus } from '@tabler/icons-react';
import { StatsGroup } from './StatsGroup';
import { useHistory } from 'react-router-dom';

export function About(): React.JSX.Element {
  const history = useHistory();

  return (
    <Container size="md" my="xl">
      <Stack gap="xl">
        <StatsGroup />

        <Paper shadow="xs" p="xl">
          <Center mb="xl">
            <Image
              src="../images/logo.png"
              alt="GreenRoots e.V. Logo"
              h={120}
              w="auto"
              fit="contain"
            />
          </Center>

          <Title order={1} mb="lg">
            Über uns – <span dir="ltr">GreenRoots e.V.</span>
          </Title>
          <Text size="md" mb="md">
            <span dir="ltr">GreenRoots e.V.</span> ist eine fiktive gemeinnützige Organisation, die
             sich für mehr Transparenz im Kampf gegen den Klimawandel einsetzt.
          </Text>
          <Text size="md" mb="md">
            Wir sammeln, analysieren und veröffentlichen Daten zu CO₂-Emissionen
            von Unternehmen und Ländern, um der Öffentlichkeit einen klaren
            Überblick zu geben.
          </Text>
          <Text size="md" mb="md">
            Unsere Mission ist es, nachhaltige Entscheidungen zu fördern und den
            Wandel hin zu einer klimafreundlichen Zukunft zu beschleunigen.
          </Text>
          <Text size="md" mb="md">
            Neben unserer Datenplattform unterstützen wir Projekte für
            Aufforstung und die Renaturierung von Ökosystemen – denn jede Wurzel
            zählt.
          </Text>
          <Text size="md" mb="xl">
            Gemeinsam mit Partnern, Freiwilligen und Unterstützer*innen schaffen
            wir ein Netzwerk, das Hoffnung pflanzt und Wandel wachsen lässt. 🌱
          </Text>

          <Center>
            <Button
              size="lg"
              leftSection={<IconUserPlus size={20} />}
              variant="gradient"
              gradient={{ from: 'green', to: 'teal', deg: 90 }}
              onClick={() => history.push('/join-us')}
            >
              Jetzt mitmachen!
            </Button>
          </Center>
        </Paper>
      </Stack>
    </Container>
  );
}
