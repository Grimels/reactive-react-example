import * as React from 'react';

import { STATUS } from 'Constants/state';

export const useServerSentEvents = <T>(path: string): [string, Array<T>, string?] => {
  const [{ status, data, error }, setState] = React.useState<{ status: string; data: Array<T>; error?: string }>({
    status: STATUS.LOADING,
    data: [],
    error: undefined,
  });

  React.useEffect(() => {
    const eventSource = new EventSource(path, { withCredentials: true });

    eventSource.onmessage = (serverEvent) => {
      const fetchedItem: T = JSON.parse(serverEvent.data);
      setState(({ data: prevData }) => ({ status: STATUS.SUCCESS, error: undefined, data: [...prevData, fetchedItem] }));
    };

    eventSource.onerror = () => {
      setState(({ data: prevData }) => ({ status: STATUS.ERROR, error: 'Error!', data: prevData }));
    };

    return eventSource.close;
  }, []);

  return [status, data, error];
};
