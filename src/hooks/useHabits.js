import { getDateAsString } from "../utilities/utility";
import { useLocalStorage } from "./useLocalStorage";
export const useHabits = () => {
  const habitsKey = `dayInfo/habits`;

  const [habits, setHabits] = useLocalStorage(habitsKey, []);

  const addHabit = (newHabit) => {
    newHabit.daysComplete = [];
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const removeHabit = (habitToRemove) => {
    setHabits((prevHabits) =>
      prevHabits.filter((habit) => habit !== habitToRemove)
    );
  };

  const addDayToCompleteList = (habit, day) => {
    habit.daysComplete.push(getDateAsString(day));
    return habit;
  };

  const removeDayFromCompleteList = (habit, day) => {
    const indexOfDay = habit.daysComplete.indexOf(getDateAsString(day));
    habit.daysComplete.splice(indexOfDay, 1);
    return habit;
  };

  const makeNewHabit = (habit, day) => {
    var isFound =
      habit.daysComplete.indexOf(getDateAsString(day)) > -1 ? true : false;
    if (!isFound) {
      return addDayToCompleteList(habit, day);
    }
    if (isFound) {
      return removeDayFromCompleteList(habit, day);
    }
  };

  const replaceOldHabit = (habit, newHabit) => {
    const habitIndex = habits.indexOf(habit);
    const newHabits = habits;
    newHabits.splice(habitIndex, 1, newHabit);
    setHabits(newHabits);
  };

  const toggleHabitForDay = (habit, day) => {
    var newHabit = makeNewHabit(habit, day);
    replaceOldHabit(habit, newHabit);

    return true;
  };

  return [
    {
      habits,
      setHabits,
      addHabit,
      removeHabit,
      toggleHabitForDay,
    },
  ];
};
