import { useState } from "react";

export const useDates = () => {
  const [day, setDay] = useState(new Date());

  const getToday = () => {
    return new Date();
  };

  const getNextDay = (currDay) => {
    const nextDay = new Date(currDay);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  };

  const getPrevDay = (currDay) => {
    const nextDay = new Date(currDay);
    nextDay.setDate(nextDay.getDate() - 1);
    return nextDay;
  };

  const getDateAsString = (day) => {
    const monthString = getMyMonth(day.getMonth());
    const dayString = day.getDate();
    const yearString = day.getYear() + 1900;
    return `${monthString} ${dayString}, ${yearString}`;
  };

  const getMyMonth = (num) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[num];
  };

  const handleDayChange = (direction) => {
    if (direction === "right") setDay(getNextDay(day));
    if (direction === "left") setDay(getPrevDay(day));
  };

  return [
    {
      day,
      setDay,
      getToday,
      getNextDay,
      getPrevDay,
      getDateAsString,
      handleDayChange,
    },
  ];
};
