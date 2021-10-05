import { api } from '../../services';

export const composeEndpoint = (endpoint: string) => {
  const formatEndpoint = (href: string) => href.replace(/^(\/)|(\/)$/g, '');

  const formattedEndpoint = formatEndpoint(endpoint);

  return `${api.defaults.baseURL}/${formattedEndpoint}`;
};
