import { stringifyRecords } from './stringifyRecords.js';

export type URLBuilderProps = {
  protocol?: 'http' | 'https';
  host: string;
  port?: number;
  path?: string;
  parameters?: Record<string, string | object | number | boolean>;
};

export const urlBuilder = ({
  protocol,
  host,
  port,
  path,
  parameters,
}: URLBuilderProps) => {
  let url = `${protocol ?? 'https'}://${host}`;

  if (port) {
    url += `:${port}`;
  }

  if (path) {
    url += `/${path}`;
  }

  if (parameters) {
    url += `?${new URLSearchParams(stringifyRecords(parameters)).toString()}`;
  }

  return url;
};
