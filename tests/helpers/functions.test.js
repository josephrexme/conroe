import * as Functions from '../../src/helpers/functions';

describe('Helper Functions', () => {
  test('date formats with Nigerian timezone', () => {
    const input = Functions.formatLocalDate('1974-10-21');
    expect(input).toBe('October 21, 1974');
  });
  test('zodiac sign gets derived from date', () => {
    const input = Functions.zodiacSign('1994-07-30');
    expect(input).toBe('Leo');
  });
  test('zodiac covers dec and jan for capricorn', () => {
    const input = Functions.zodiacSign('1994-01-13');
    const input2 = Functions.zodiacSign('1994-12-25');
    expect(input).toBe('Capricorn');
    expect(input2).toBe('Capricorn');
  });
});
