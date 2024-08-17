const getTimeInTimezone = (timezoneOffsetInSeconds) => {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const utcMilliseconds = now.getUTCMilliseconds();

  const timezoneTime = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    utcHours,
    utcMinutes + timezoneOffsetInSeconds / 60,
    utcSeconds,
    utcMilliseconds
  ));

  let hours = timezoneTime.getUTCHours();
  const minutes = timezoneTime.getUTCMinutes();

  const dayHalf = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${formattedMinutes} ${dayHalf}`;
}

export {getTimeInTimezone};