import { render } from '@testing-library/react';

import { App } from '../../app';
import { Providers } from '../../app/components';

type RenderParameters = Parameters<typeof render>;

type RenderFabricMaskOptions = {
  path?: string;
} & RenderParameters[1];

export const renderWithProviders = (
  ui: RenderParameters[0],
  options?: RenderParameters[1],
) => render(ui, { ...options, wrapper: Providers });

export const renderFabricRisk = (config?: RenderFabricMaskOptions) => {
  const { path = '/', ...options } = config || {};

  window.history.pushState({}, 'FabricRisk', path);

  return render(<App />, options);
};
