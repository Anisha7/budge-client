
export function calculateTimeLeft(time) {
  const diff = time - Date.now();

  let totalSeconds = diff / 1000;
  // calculate (and subtract) whole hours
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(totalSeconds / 60) % 60;
  totalSeconds -= minutes * 60;

  // what's left is seconds
  const seconds = Math.floor(totalSeconds % 60);
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
  if (minutes > 60) {
      throw "Please provide valid minutes!"
  }
  if (seconds > 60) {
    throw "Please provide valid seconds"
  }

  let currDate = Date.now();
  let ms = 0;
  ms += seconds * 1000;
  ms += minutes * 1000 * 60;
  ms += hours * 1000 * 60 * 60;
  currDate += ms;
  return currDate;

}
