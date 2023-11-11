/**
 * Shuffles the given array using the Schwartzian transform:
 * Creates an object for each array entry and assign it a random
 * number, then sorts that resulting array according to the previously assigned
 * random value, then removes that object to have only the original value and returns that
 * resulting array.
 * @see https://stackoverflow.com/a/46545530
 * @param arr array to shuffle
 * @returns shuffled array
 */
export function shuffleArray<arrayType>(
  arr: Array<arrayType>
): Array<arrayType> {
  //Add a random number prop to each array entry
  const entriesWithRandomValue = arr.map((value) => ({
    value,
    sort: Math.random(),
  }));
  //Sort it according to the random value
  const shuffledWithRandomVal = entriesWithRandomValue.sort(
    (a, b) => a.sort - b.sort
  );
  //Remove the temp structure used to shuffle
  const cleanedShuffledArr = shuffledWithRandomVal.map(({ value }) => value);
  return cleanedShuffledArr;
}
