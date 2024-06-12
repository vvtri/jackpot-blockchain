'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import { appDayjs } from '../../configs/dayjs.config';
import { cn } from '@/common/utils/shadcn';

type CountDownProps = {
  time: Date;
  className?: string;
};

export default function CountDown(props: CountDownProps) {
  const { time, className } = props;
  const [timeLeft, setTimeLeft] = useState(() =>
    appDayjs(time).diff(appDayjs(), 'second'),
  );
  const [mounted, setMounted] = useState(false);

  const leftDuration = appDayjs.duration(timeLeft, 'second');
  const hourDiff = leftDuration.hours();
  const minuteDiff = leftDuration.minutes();
  const secondDiff = leftDuration.seconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        return prev - 1;
      });
    }, 1000);

    setMounted(true);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    mounted && (
      <div
        className={cn(
          'grid grid-cols-3 gap-y-0 gap-x-4 font-semibold',
          className,
        )}
      >
        <span className="text-center">{hourDiff}</span>
        <span className="text-center">{minuteDiff}</span>
        <span className="text-center">{secondDiff}</span>

        <span className="uppercase text-center">hours</span>
        <span className="uppercase text-center">minutes</span>
        <span className="uppercase text-center">seconds</span>
      </div>
    )
  );
}
