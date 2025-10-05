import React, { useState } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from '@tabler/icons-react';
import {
  Center,
  Container,
  Grid,
  Group,
  ScrollArea,
  Select,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { getDataByYear, CO2EmissionData } from '../../data/co2EmissionsData';
import { YearNavbar } from './YearNavbar';
import './table.css';

type RowData = CO2EmissionData;

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort: () => void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className="th">
      <UnstyledButton onClick={onSort} className="control">
        <Group justify="space-between" wrap="nowrap">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className="icon">
            <Icon size={16} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(
  data: RowData[],
  companySearch: string,
  countryFilter: string | null,
) {
  return data.filter((item) => {
    // Filter by company name
    const matchesCompany = companySearch
      ? item.company.toLowerCase().includes(companySearch.toLowerCase().trim())
      : true;

    // Filter by country
    const matchesCountry = countryFilter
      ? item.country === countryFilter
      : true;

    return matchesCompany && matchesCountry;
  });
}

function sortData(
  data: RowData[],
  payload: {
    sortBy: keyof RowData | null;
    reversed: boolean;
    companySearch: string;
    countryFilter: string | null;
  },
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.companySearch, payload.countryFilter);
  }

  return filterData(
    [...data].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      // Handle numeric sorting
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return payload.reversed ? bValue - aValue : aValue - bValue;
      }

      // Handle string sorting
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (payload.reversed) {
          return bValue.localeCompare(aValue);
        }
        return aValue.localeCompare(bValue);
      }

      return 0;
    }),
    payload.companySearch,
    payload.countryFilter,
  );
}

// Helper function to format numbers with thousand separators
function formatNumber(num: number): string {
  return num.toLocaleString('de-DE');
}

export function TableData() {
  const [companySearch, setCompanySearch] = useState('');
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('2025'); // Default to 2025
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  // Get data for the selected year
  const currentYearData = getDataByYear(parseInt(selectedYear));

  // Get unique countries for the select dropdown from current year data
  const countries = Array.from(
    new Set(currentYearData.map((item) => item.country)),
  ).sort();

  // Filtered and sorted data
  const [sortedData, setSortedData] = useState(currentYearData);

  // Update sorted data when year changes
  React.useEffect(() => {
    const yearData = getDataByYear(parseInt(selectedYear));
    setSortedData(
      sortData(yearData, {
        sortBy,
        reversed: reverseSortDirection,
        companySearch,
        countryFilter,
      }),
    );
  }, [
    selectedYear,
    sortBy,
    reverseSortDirection,
    companySearch,
    countryFilter,
  ]);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
  };

  const handleCompanySearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.currentTarget;
    setCompanySearch(value);
  };

  const handleCountryFilterChange = (value: string | null) => {
    setCountryFilter(value);
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.company + row.country}>
      <Table.Td>{row.company}</Table.Td>
      <Table.Td>{row.country}</Table.Td>
      <Table.Td style={{ textAlign: 'right' }}>
        {formatNumber(row.totalEmissions)}
      </Table.Td>
      <Table.Td style={{ textAlign: 'right' }}>
        {formatNumber(row.scope1)}
      </Table.Td>
      <Table.Td style={{ textAlign: 'right' }}>
        {formatNumber(row.scope2)}
      </Table.Td>
      <Table.Td style={{ textAlign: 'right' }}>
        {formatNumber(row.scope3)}
      </Table.Td>
      <Table.Td>{row.contact}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container my="md" size="xl">
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <YearNavbar
            activeYear={selectedYear}
            onYearSelect={handleYearSelect}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Grid mb="md" gutter="md">
            <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
              <TextInput
                placeholder="Firma suchen..."
                leftSection={<IconSearch size={16} stroke={1.5} />}
                value={companySearch}
                onChange={handleCompanySearchChange}
                label="Unternehmen"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Select
                placeholder="Alle Länder"
                data={countries}
                value={countryFilter}
                onChange={handleCountryFilterChange}
                clearable
                searchable
                label="Land"
              />
            </Grid.Col>
          </Grid>
          <ScrollArea>
            <Table
              horizontalSpacing="md"
              verticalSpacing="xs"
              miw={1200}
              layout="auto"
              striped
              highlightOnHover
            >
              <Table.Thead>
                <Table.Tr>
                  <Th
                    sorted={sortBy === 'company'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('company')}
                  >
                    Unternehmen
                  </Th>
                  <Th
                    sorted={sortBy === 'country'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('country')}
                  >
                    Land
                  </Th>
                  <Th
                    sorted={sortBy === 'totalEmissions'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('totalEmissions')}
                  >
                    Gesamt-Emissionen (t CO₂e)
                  </Th>
                  <Th
                    sorted={sortBy === 'scope1'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('scope1')}
                  >
                    Scope 1 (direkt)
                  </Th>
                  <Th
                    sorted={sortBy === 'scope2'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('scope2')}
                  >
                    Scope 2 (Energie)
                  </Th>
                  <Th
                    sorted={sortBy === 'scope3'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('scope3')}
                  >
                    Scope 3 (Lieferkette)
                  </Th>
                  <Th
                    sorted={sortBy === 'contact'}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting('contact')}
                  >
                    Kontakt
                  </Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {rows.length > 0 ? (
                  rows
                ) : (
                  <Table.Tr>
                    <Table.Td colSpan={7}>
                      <Text fw={500} ta="center">
                        Keine Ergebnisse gefunden
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
