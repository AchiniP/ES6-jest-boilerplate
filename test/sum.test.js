import { sum } from '../src/sum';

describe('test sum', () => {
  it('should return sum of given values', () => {
    expect(sum(1, 5)).toBe(6);
  });
});
