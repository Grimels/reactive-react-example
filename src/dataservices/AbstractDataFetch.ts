export interface IAbstractDataFetch {
  get: <T>(path: string) => Promise<T>;
}

export class AbstractDataFetch implements IAbstractDataFetch {
  get = async <T>(path: string): Promise<T> => {
    const response = await fetch(`/api${path}`);
    const parsedResponse = await response.json();

    console.log(parsedResponse);
    return parsedResponse.data;
  };
}
