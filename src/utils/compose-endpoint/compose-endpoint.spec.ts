import { api } from '../../services';

import { composeEndpoint } from '.';

describe('utils | composeEndpoint()', () => {
  const expectedResult = `${api.defaults.baseURL}/test/endpoint`;

  it('should compose a url merging the base url with the endpoint passed', () => {
    expect(composeEndpoint('test/endpoint')).toEqual(expectedResult);
  });

  it('should compose a valid url even if the endpoint passed starts with a "/", without duplicating the character', () => {
    expect(composeEndpoint('/test/endpoint')).toEqual(expectedResult);
  });

  it('should compose a valid url and the string should not end with a "/"', () => {
    expect(composeEndpoint('/test/endpoint/')).toEqual(expectedResult);
  });
});
