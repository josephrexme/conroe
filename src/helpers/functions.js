import _inRange from 'lodash/inRange';

export const getContentByReady = (ready, context) => {
  const readyStates = {
    initial: null,
    loading: context.loading(),
    loaded: context.loaded(),
    error: context.error(),
  };
  return readyStates[ready];
};

export const zodiacSign = (date) => {
  if(!date) return null;
  const [, month, day] = date.split('-');
  const comboDate = Number(`${month}${day}`);
  const signs = [
    { name: 'Aries', start: 321, end: 419 },
    { name: 'Taurus', start: 420, end: 520 },
    { name: 'Gemini', start: 521, end: 620 },
    { name: 'Cancer', start: 621, end: 722 },
    { name: 'Leo', start: 723, end: 822 },
    { name: 'Virgo', start: 823, end: 922 },
    { name: 'Libra', start: 923, end: 1022 },
    { name: 'Scorpio', start: 1023, end: 1121 },
    { name: 'Sagittarius', start: 1122, end: 1221 },
    { name: 'Capricorn', start: 1222, end: 1231 },
    { name: 'Capricorn', start: 101, end: 119 },
    { name: 'Aquarius', start: 120, end: 218 },
    { name: 'Pisces', start: 219, end: 320 },
  ];
  return signs.find(sign => _inRange(comboDate, sign.start, sign.end)).name;
};

export const formatLocalDate = (date) => {
  const options = {
    timeZone: 'Africa/Lagos',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newDate = new Date(date).toLocaleDateString('en', options);
  return newDate;
};

export const colorOverlayByRole = role => (({
  news: 'rgba(0, 0, 0, .5)',
  event: 'rgba(255, 201, 0, .8)',
  spotlight: 'rgba(0, 0, 0, .6)'
})[role]);
