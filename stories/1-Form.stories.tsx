import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { Button } from "../src/components";
import { theme } from '../src/theme';

export default {
  title: 'Form',
  component: Button,
};

export const Text = () => <ThemeProvider theme={theme}>
  <Button>Hello Button</Button>
</ThemeProvider>;
