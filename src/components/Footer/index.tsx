import React from 'react';
import { Anchor, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import './footer.css';

interface LinkItem {
  link: string;
  label: string;
}

const links: LinkItem[] = [{ link: '/impressum', label: 'Impressum' }];

export function Footer(): React.JSX.Element {
  const items = links.map((link) => (
    <Anchor
      component={Link}
      to={link.link}
      c="dimmed"
      key={link.label}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className="footer">
      <Container className="inner">
        <Group className="links">{items}</Group>
      </Container>
    </div>
  );
}
