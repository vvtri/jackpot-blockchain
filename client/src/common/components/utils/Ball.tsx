import { cn } from '@/common/utils/shadcn';
import React, { PropsWithChildren } from 'react';

type BallProps = {
  variant?: 'default' | 'red' | 'green';
  className?: string;
  onClick?: () => any;
  showCloseIcon?: boolean;
  size?: 'sm' | 'lg';
} & PropsWithChildren;

export default function Ball(props: BallProps) {
  const {
    children,
    variant = 'default',
    className,
    onClick,
    showCloseIcon,
    size = 'lg',
  } = props;

  return (
    <div
      className={cn(
        'aspect-square flex items-center justify-center rounded-full font-bold transition relative',
        {
          'bg-[#c8102e] text-white drop-shadow-2xl': variant === 'red',

          'bg-primary text-white drop-shadow-2xl': variant === 'green',

          'bg-[radial-gradient(circle_at_50%_25%,#fff,#bbb)] ':
            variant === 'default',
        },
        {
          'w-7': size === 'sm',
          'w-12': size === 'lg',
        },
        className,
      )}
      onClick={onClick}
    >
      {showCloseIcon && (
        <span className="absolute top-0 right-0 ">&times;</span>
      )}
      {children}
    </div>
  );
}
