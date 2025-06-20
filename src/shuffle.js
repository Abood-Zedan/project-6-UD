/**
 * Randomly shuffles the elements of an array in place.
 * @param {any[]} array
 * @returns {any[]} The same array, shuffled.
 */
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
