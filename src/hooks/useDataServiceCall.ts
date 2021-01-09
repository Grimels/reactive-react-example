import * as React from 'react';

import { STATUS } from 'Constants/state';

export const useDataServiceCall = <T>(dataServiceCall: () => Promise<T>): [string, T?, string?] => {
  const [{ status, data, error }, setState] = React.useState<{ status: string; data?: T; error?: string }>({
    status: STATUS.LOADING,
    data: undefined,
    error: undefined,
  });

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedData = await dataServiceCall();
        setState({ status: STATUS.SUCCESS, error: undefined, data: fetchedData });
      } catch (e) {
        setState({ status: STATUS.ERROR, error: e, data: undefined });
      }
    })();
  }, []);

  return [status, data, error];
};
