export const int32SafeMinValue = -2147483648;
export const int32SafeMaxValue = 2147483647;

export function toSafeInt(value: number): number {
  return Math.max(int32SafeMinValue, Math.min(int32SafeMaxValue, value));
}
