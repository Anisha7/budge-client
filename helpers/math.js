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