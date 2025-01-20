import { cn } from '@/lib/utils';
import type { ReactElement } from 'react';

interface Props {
  className?: string;
  variant?: 'faded' | 'start-faded' | 'end-faded';
}

export default function Separator({
  className,
  variant = 'faded',
}: Props): ReactElement {
  return (
    <div className={cn('flex w-full', className)}>
      {variant === 'faded' && (
        <>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-neutral-200"></div>
          <div className="h-[1px] w-full max-w-screen-xl shrink-0 bg-neutral-200"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-neutral-200 to-transparent"></div>
        </>
      )}
      {variant === 'start-faded' && (
        <>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-neutral-200"></div>
          <div className="h-[1px] w-full bg-neutral-200"></div>
        </>
      )}
      {variant === 'end-faded' && (
        <>
          <div className="h-[1px] w-full bg-neutral-200"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-neutral-200 to-transparent"></div>
        </>
      )}
    </div>
  );
}
