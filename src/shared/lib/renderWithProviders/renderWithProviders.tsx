import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface RenderWithProvidersProps {
  initialRoute?: string;
  initialState?: StoreSchema;
}

export const renderWithProviders = (ui: ReactNode, options: RenderWithProvidersProps = {}) => {
  const { initialRoute = '/', initialState } = options;

  return {
    user: userEvent,
    screen,
    ...render(
      <StoreProvider initialState={initialState}>
        <MemoryRouter initialEntries={[initialRoute]}>{ui}</MemoryRouter>
      </StoreProvider>
    ),
  };
};
