// Math credit: https://stackoverflow.com/questions/13903897/javascript-return-number-of-days-hours-minutes-seconds-between-two-dates

import { AnDate } from "andatelib";

export function calculateTimeLeft(time) {
  // console.log(time)
  const diff = time - new AnDate().getTime();
  let delta = diff / 1000;
  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  const seconds = Math.floor(delta % 60);
  // console.log(hours, minutes, seconds, delta)
  return `${Math.abs(hours)}:${minutes}:${seconds}`;
}

// converts string hrs:mins:secs to object with numbers & add to current time
export function calculateEndTime(time) {
  let hours =
    time.length > 1
      ? parseInt(time.slice(0, 2))
      : time.length > 0
      ? parseInt(time.slice(0, 1))
      : 0;
  let minutes =
    time.length > 4
      ? parseInt(time.slice(3, 5))
      : time.length > 3
      ? parseInt(time.slice(3, 4))
      : 0;
  let seconds =
    time.length > 7
      ? parseInt(time.slice(6, 8))
      : time.length > 6
      ? parseInt(time.slice(6, 7))
      : 0;

  // TODO: if minutes or seconds are more than 60, throw error

  let currDate = new AnDate();
  return currDate.consecutiveDates(1, { hours, minutes, seconds })[0].getTime();
}
