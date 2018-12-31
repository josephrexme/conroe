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

  describe('Content is derived by ready state', () => {
    const context = {
      loading: () => 'Loading content',
      loaded: () => 'Loaded content',
      error: () => 'Error content',
    };
    test('content is fetched when ready is loading', () => {
      const input = Functions.getContentByReady('loading', context);
      expect(input).toBe('Loading content');
    });
    test('content is fetched when ready is loaded', () => {
      const input = Functions.getContentByReady('loaded', context);
      expect(input).toBe('Loaded content');
    });
    test('content is fetched when ready is error', () => {
      const input = Functions.getContentByReady('error', context);
      expect(input).toBe('Error content');
    });
  });

  describe('Color is derived by role', () => {
    test('news role gets its overlay color', () => {
      const input = Functions.colorOverlayByRole('news');
      expect(input).toBe('rgba(0, 0, 0, .5)');
    });
    test('event role gets its overlay color', () => {
      const input = Functions.colorOverlayByRole('event');
      expect(input).toBe('rgba(255, 201, 0, .8)');
    });
    test('spotlight role gets its overlay color', () => {
      const input = Functions.colorOverlayByRole('spotlight');
      expect(input).toBe('rgba(0, 0, 0, .7)');
    });
  });
});
