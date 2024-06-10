import { cn } from '@/common/utils/shadcn';
import React, { PropsWithChildren } from 'react';

type PageWrapperProps = PropsWithChildren & React.JSX.IntrinsicElements['main'];

export default function PageWrapper(props: PageWrapperProps) {
  const { children, className, ...rest } = props;

  return (
    <main {...rest} className={cn('min-h-screen bg-secondary', className)}>
      {children}
    </main>
  );
}
