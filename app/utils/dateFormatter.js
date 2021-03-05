export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const getHour = (date,timezone) => {
    let fullDate = new Date((date+timezone)*1000);
    return fullDate.toLocaleTimeString().substr(0,5)
}

export const getListDay = (firstDay,timezone,days) => {
    const list = [];
    if (firstDay) {
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      let counter = 0;
      while (counter < days) {
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