import React from 'react';
import Ball from './Ball';
import { cn } from '@/common/utils/shadcn';

type LuckyNumberProps = {
  className?: string;
};

export default function LuckyNumber(props: LuckyNumberProps) {
  const { className } = props;

  return (
    <div className={cn('flex gap-2', className)}>
      <Ball>8</Ball>
      <Ball>15</Ball>
      <Ball>15</Ball>
      <Ball>15</Ball>
      <Ball>15</Ball>
      <Ball variant="red">15</Ball>
    </div>
  );
}
