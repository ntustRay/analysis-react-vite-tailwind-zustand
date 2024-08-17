const getTimeInTimezone = (timezoneOffsetInSeconds) => {
  const now = new Date();
  const localTime = now.getTime();
  const localOffset = now.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  const timezoneTime = new Date(utc + (timezoneOffsetInSeconds * 1000));

  let hours = timezoneTime.getUTCHours();
  const minutes = timezoneTime.getUTCMinutes();

  const dayHalf = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${formattedMinutes} ${dayHalf}`;
}

export {getTimeInTimezone};
