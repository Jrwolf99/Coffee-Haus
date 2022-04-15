import { useEffect, useState } from "react";
import { useDates } from "../../../../hooks/useDates";

export const useHabitEntry = (habit, day) => {
  const [isChecked, setIsChecked] = useState(false);
  const [{ getDateAsString }] = useDates();

  useEffect(() => {
    setIsChecked(
      habit.daysComplete.indexOf(getDateAsString(day)) > -1 ? true : false
    );
  }, [habit.daysComplete, getDateAsString, day]);

  return [isChecked, setIsChecked];
};
