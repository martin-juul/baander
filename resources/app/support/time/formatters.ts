import { TimeFormat } from '@/support/time/time-format';
import { format } from 'date-fns';

export const formatTime = (time: string, timeFormat: TimeFormat) => {
  const date = new Date(time);

  switch (timeFormat) {
    case TimeFormat.Full:
      return format(date, TimeFormat.Full);
    case TimeFormat.Date:
      return format(date, TimeFormat.Date);
    case TimeFormat.Time:
      return format(date, TimeFormat.Time);
    default:
      return date.toLocaleTimeString();
  }
}
