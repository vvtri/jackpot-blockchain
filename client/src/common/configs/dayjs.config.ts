import appDayjs from 'dayjs';
import en from 'dayjs/locale/en';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';

appDayjs.extend(utc);
appDayjs.extend(timezone);
appDayjs.extend(weekday);
appDayjs.extend(localeData);
appDayjs.locale(en);
appDayjs.extend(customParseFormat);
appDayjs.extend(duration);
appDayjs.extend(relativeTime);

export { appDayjs };
