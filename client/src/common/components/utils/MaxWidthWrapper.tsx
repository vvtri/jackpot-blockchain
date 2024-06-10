import { cn } from '@/common/utils/shadcn';
import React, { PropsWithChildren } from 'react';

type MaxWidthWrapperProps = PropsWithChildren &
  React.JSX.IntrinsicElements['div'];

export default function MaxWidthWrapper(props: MaxWidthWrapperProps) {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={cn('max-w-screen-xl mx-auto', className)}>
      {children}
    </div>
  );
}
