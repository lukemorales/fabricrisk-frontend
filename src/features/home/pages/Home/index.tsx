import { useMemo } from 'react';

import { authActions } from '../../../auth/reducer';
import { selectAuthenticatedData } from '../../../auth/reducer/selectors';
import { useFabricDispatch, useFabricSelector } from '../../../../app/store';
import { Button } from '../../../../components';

export const Home = () => {
  const dispatch = useFabricDispatch();
  const { user, timestamp, workDirectory } = useFabricSelector(
    selectAuthenticatedData,
  );

  const formattedTimestamp = useMemo(
    () =>
      new Date(timestamp).toLocaleString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    [timestamp],
  );

  const handleLogout = () => dispatch(authActions.logout());

  return (
    <div>
      <h1>Home Page</h1>

      <p>{`Welcome, ${user}!`}</p>
      <p>
        {`The last time your credentials were authenticated was on ${formattedTimestamp}.`}
      </p>
      <p>{`This application is running on ${workDirectory}.`}</p>

      <Button
        variant="secondary"
        type="button"
        onClick={handleLogout}
        css={{ marginTop: 20 }}
      >
        Logout
      </Button>
    </div>
  );
};
