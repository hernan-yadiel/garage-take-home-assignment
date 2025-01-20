import type { ReactElement } from 'react'

export default function Separator(): ReactElement {
    return (
        <div className="flex w-full">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-neutral-200"></div>
            <div className="h-[1px] w-full max-w-screen-xl shrink-0 bg-neutral-200"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-neutral-200 to-transparent"></div>
        </div>
    )
}
