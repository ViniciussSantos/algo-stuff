export function insert(
  intervals: number[][],
  newInterval: number[],
): number[][] {
  let indexToInsert: number = -1;

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (newInterval[0] < start) {
      indexToInsert = i;
      break;
    }
  }

  const finalIndex = indexToInsert === -1 ? intervals.length : indexToInsert;
  intervals.splice(finalIndex, 0, newInterval);

  let ptr = finalIndex !== 0 ? finalIndex - 1 : 0;
  let mergedInterval: number[] = [intervals[ptr][0], intervals[ptr][1]];

  let numOfIntervalsToRemove = 0;

  for (let i = ptr; i < intervals.length; i++) {
    const interval = intervals[i];

    if (
      (newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) ||
      (newInterval[1] >= interval[0] && newInterval[1] <= interval[1])
    ) {
      mergedInterval[1] = interval[1];
      numOfIntervalsToRemove++;
    } else {
      break;
    }
  }

  //TODO: remove the intervals that were merged into the new interval
  //this does not work for some reason
  const updatedIntervals: number[][] = [
    ...intervals.slice(0, finalIndex - 1),
    mergedInterval,
    ...intervals.slice(finalIndex + numOfIntervalsToRemove),
  ];

  return updatedIntervals;
}
