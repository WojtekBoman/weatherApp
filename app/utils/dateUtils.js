export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const getHour = (date, timezone) => {
  let fullDate = new Date((date + timezone) * 1000);
  return fullDate.toLocaleTimeString().substr(0, 5);
};

const diffDays = (dt1, dt2) =>
  Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );

export const getListDay = (firstDay, lastDay, timezone) => {
  const list = [];
  if (firstDay) {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const dt1 = new Date((firstDay.dt + timezone) * 1000);
    const dt2 = new Date((lastDay.dt + timezone) * 1000);
    const diffTime = diffDays(dt1, dt2);
    let counter = 0;
    while (counter < diffTime + 1) {
      let y = new Date((firstDay.dt + timezone) * 1000);
      y.setDate(y.getDate() + counter);

      list.push({
        day: weekday[y.getDay()],
        date: formatDate(y),
      });
      counter++;
    }
  }
  return list;
};
