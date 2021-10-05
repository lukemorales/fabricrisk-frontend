import { useRoutes } from 'react-router-dom';

import { Providers } from './components';
import { routes } from './routes';

export const App = () => <Providers>{useRoutes(routes)}</Providers>;
