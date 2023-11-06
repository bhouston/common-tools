export const stringifyRecords = (
  map: Record<string, string | number | object | boolean>
) => {
  return Object.entries(map).map(([key, value]) => {
    let valueAsString = '';
    if (typeof value === 'string') {
      valueAsString = value;
    } else if (typeof value === 'boolean') {
      valueAsString = value ? 'true' : 'false';
    } else if (typeof value === 'number') {
      valueAsString = value.toString();
    } else if (typeof value === 'object') {
      valueAsString = JSON.stringify(value);
    }
    return [key, valueAsString];
  });
};
