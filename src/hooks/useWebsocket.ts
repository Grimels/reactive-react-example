import * as React from 'react';

import { STATUS } from 'Constants/state';
import { API_WEBSOCKET_URL } from 'Constants/api';

let webSocket: WebSocket;

export const useWebsocket = <T>(path: string, connectionPayload: unknown): [string, Array<T>, string?] => {
  const [{ status, data, error }, setState] = React.useState<{ status: string; data: Array<T>; error?: string }>({
    status: STATUS.LOADING,
    data: [],
    error: undefined,
  });

  React.useEffect(() => {
    webSocket = new WebSocket(API_WEBSOCKET_URL + path);

    webSocket.onopen = () => {
      webSocket.send(JSON.stringify(connectionPayload));
    };

    webSocket.onmessage = (messageEvent) => {
      const fetchedItem: T = JSON.parse(messageEvent.data);
      setState(({ data: prevData }) => ({ status: STATUS.SUCCESS, error: undefined, data: [...prevData, fetchedItem] }));
    };

    webSocket.onerror = () => {
      setState(({ data: prevData }) => ({ status: STATUS.ERROR, error: 'Error!', data: prevData }));
    };

    return webSocket.close;
  }, []);

  React.useEffect(() => {
    if (webSocket && webSocket.readyState === webSocket.OPEN) {
      webSocket.send(JSON.stringify(connectionPayload));
    }
  }, [connectionPayload]);

  return [status, data, error];
};
