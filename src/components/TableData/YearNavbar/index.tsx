import React, { useState } from 'react';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import './year-navbar.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  activeYear: string | null;
  onYearSelect: (year: string) => void;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  activeYear,
  onYearSelect,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component="a"
      className="year-navbar-link"
      href={link.link}
      key={link.label}
      data-active={activeYear === link.label || undefined}
      onClick={(event) => {
        event.preventDefault();
        onYearSelect(link.label);
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className="year-navbar-control">
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className="year-navbar-chevron"
              stroke={1.5}
              size={16}
              style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

interface YearNavbarProps {
  activeYear: string | null;
  onYearSelect: (year: string) => void;
}

export function YearNavbar({ activeYear, onYearSelect }: YearNavbarProps) {
  const yearData = {
    label: 'Jahr auswählen',
    icon: IconCalendarStats,
    links: [
      { label: '2024', link: '#' },
      { label: '2025', link: '#' },
    ],
  };

  return (
    <Box p="md">
      <LinksGroup
        {...yearData}
        initiallyOpened={true}
        activeYear={activeYear}
        onYearSelect={onYearSelect}
      />
    </Box>
  );
}
