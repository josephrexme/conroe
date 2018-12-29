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
  let sign;
  const [, month, day] = date.split('-');
  const comboDate = Number(`${month}${day}`);
  if(_inRange(comboDate, 321, 419)) {
    sign = 'Aries';
  } else if(_inRange(comboDate, 420, 520)) {
    sign = 'Taurus';
  } else if(_inRange(comboDate, 521, 620)) {
    sign = 'Gemini';
  } else if(_inRange(comboDate, 621, 722)) {
    sign = 'Cancer';
  } else if(_inRange(comboDate, 723, 822)) {
    sign = 'Leo';
  } else if(_inRange(comboDate, 823, 922)) {
    sign = 'Virgo';
  } else if(_inRange(comboDate, 923, 1022)) {
    sign = 'Libra';
  } else if(_inRange(comboDate, 1023, 1121)) {
    sign = 'Scorpio';
  } else if(_inRange(comboDate, 1122, 1221)) {
    sign = 'Sagittarius';
  } else if(_inRange(comboDate, 1222, 1231) || _inRange(101, 119)) {
    sign = 'Capricorn';
  } else if(_inRange(comboDate, 120, 218)) {
    sign = 'Aquarius';
  } else if(_inRange(comboDate, 219, 320)) {
    sign = 'Pisces';
  }
  return sign;
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
