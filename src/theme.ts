import { createTheme, MantineColorsTuple } from '@mantine/core';

// Custom green color palette for CO2/environmental theme
const forestGreen: MantineColorsTuple = [
  '#f0fdf4', // lightest
  '#dcfce7',
  '#bbf7d0',
  '#86efac',
  '#4ade80',
  '#22c55e', // base green
  '#16a34a',
  '#15803d',
  '#166534',
  '#14532d', // darkest
];

// Earth brown/tan color palette
const earthBrown: MantineColorsTuple = [
  '#fef9f3',
  '#fdf4e8',
  '#fbe8d0',
  '#f7d9b0',
  '#f3c98e',
  '#d4a574', // base earth tone
  '#b8885f',
  '#9d6f4b',
  '#82583a',
  '#6b472d',
];

export const theme = createTheme({
  primaryColor: 'forestGreen',
  colors: {
    forestGreen,
    earthBrown,
  },
  defaultRadius: 'md',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontWeight: '600',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Paper: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Table: {
      defaultProps: {
        highlightOnHover: true,
      },
    },
  },
});
