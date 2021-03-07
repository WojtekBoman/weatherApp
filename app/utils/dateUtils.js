export const getHour = (date, timezone) => {
  let fullDate = new Date((date + timezone) * 1000);
  return fullDate.toLocaleTimeString().substr(0, 5);
};

export const getFormatDate = (date, timezone) =>
  formatDate(new Date((date + timezone) * 1000));

export const getWeekdayName = (day) => {
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return weekday[day];
};

export const getListDay = (firstDay, lastDay, timezone) => {
  let list = [];
  if (firstDay) {
    const dt1 = new Date((firstDay.dt + timezone) * 1000);
    const dt2 = new Date((lastDay.dt + timezone) * 1000);
    const diffTime = diffDays(dt1, dt2);
    //Difference in days + today

    list = [...Array(diffTime + 1).keys()].map((day) => {
      let dateToAdd = new Date((firstDay.dt + timezone) * 1000);
      dateToAdd.setDate(dateToAdd.getDate() + day);
      return {
        day: getWeekdayName(dateToAdd.getDay()),
        date: formatDate(dateToAdd),
      };
    });
  }
  return list;
};

export const formatDate = (date) => {
  let dt = new Date(date),
    month = "" + (dt.getMonth() + 1),
    day = "" + dt.getDate(),
    year = dt.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const diffDays = (dt1, dt2) =>
  Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
