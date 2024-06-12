import React from 'react';
import Ball from './Ball';
import { cn } from '@/common/utils/shadcn';

export type LuckyNumberProps = {
  className?: string;
  data:
    | readonly [number, number, number, number, number, number]
    | [number, number, number, number, number, number];
};

export default function LuckyNumber(props: LuckyNumberProps) {
  const { className, data } = props;
  const normalBalls = data.slice(0, 5);
  const lastBall = data[data.length - 1];

  return (
    <div className={cn('flex gap-2', className)}>
      {normalBalls.map((item, idx) => (
        <Ball key={`${item}${idx}`}>{item}</Ball>
      ))}

      <Ball variant="red">{lastBall}</Ball>
    </div>
  );
}
