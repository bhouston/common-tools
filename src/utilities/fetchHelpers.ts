type FetchArgs = {
  scheme?: 'http' | 'https';
  host: string;
  port?: number;
  path?: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  searchParams?: Record<string, any>;
  headers?: Record<string, any>;
  body?: any;
};

const convertMapToString = (
  map: Record<string, any>
): Record<string, string> => {
  const stringifiedMap: Record<string, string> = {};
  for (const key in map) {
    const value = map[key];
    if (typeof value === 'object') {
      stringifiedMap[key] = JSON.stringify(value);
    } else {
      stringifiedMap[key] = value;
    }
  }
  return stringifiedMap;
};

export const fetch2 = async (args: FetchArgs) => {
  const { scheme, host, port, path, method, searchParams, headers, body } =
    args;

  let url = '';
  url += scheme ?? 'https';
  url += '://';
  url += host;
  if (port !== undefined) url += ':' + port;
  if (path !== undefined) url += '/' + path;
  if (searchParams !== undefined) {
    const searchParamsString = new URLSearchParams(
      convertMapToString(searchParams)
    ).toString();
    url += '?' + searchParamsString;
  }

  return await fetch(url, {
    method,
    headers,
    body,
  });
};
