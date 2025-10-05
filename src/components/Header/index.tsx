import React from 'react';
import { Burger, Container, Flex, Group, Title, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

interface LinkItem {
  link: string;
  label: string;
}

const links: LinkItem[] = [
  { link: '/about', label: 'Über' },
  { link: '/data', label: 'Daten' },
  { link: '/join-us', label: 'Mitmachen' },
];

export function Header(): React.JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className="link"
      data-active={location.pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="header">
      <Container size="md" className="inner">
        <Link to="/" className="logo-link">
          <Image
            src={'../images/co2.jpg'}
            width={32}
            height={32}
            alt="co2 footprint"
            radius="sm"
          />
          <Title order={3} size="h4" className="header-title" visibleFrom="xs">
            GreenRoots e.V.
          </Title>
        </Link>
        <Group gap={5} className="nav-links">
          {items}
        </Group>
      </Container>
    </header>
  );
}
