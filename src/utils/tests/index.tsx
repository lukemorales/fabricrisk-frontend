import { render } from '@testing-library/react';

import { Providers } from '../../app/components';

type RenderParameters = Parameters<typeof render>;

export const renderWithProviders = (
  ui: RenderParameters[0],
  options?: RenderParameters[1],
) => render(ui, { ...options, wrapper: Providers });
