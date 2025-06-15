import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle', () => {
  it('rearranges the indexes of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const original = [...arr];
    shuffle(arr);
    expect(arr.sort()).to.eql(original.sort());
    expect(arr.join()).to.not.equal(original.join());
  });
});
