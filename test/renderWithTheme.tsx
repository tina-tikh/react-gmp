import * as React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";

import { theme } from '../src/theme';

const renderWithTheme = (ui: React.ReactChild, options = {}) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export default renderWithTheme;
