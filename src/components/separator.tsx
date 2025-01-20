import { cn } from '@/lib/utils'
import type { ReactElement } from 'react'

interface Props {
    className?: string
}
export default function Separator({ className }: Props): ReactElement {
    return (
        <div className={cn('flex w-full', className)}>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-neutral-200"></div>
            <div className="h-[1px] w-full max-w-screen-xl shrink-0 bg-neutral-200"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-neutral-200 to-transparent"></div>
        </div>
    )
}
