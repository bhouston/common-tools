// a function to get the number of seconds until midnight this evening in UTC time

export function secondsUntilTomorrow() {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return Math.round((midnight.getTime() - now.getTime()) / 1000);
}
