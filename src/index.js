import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
