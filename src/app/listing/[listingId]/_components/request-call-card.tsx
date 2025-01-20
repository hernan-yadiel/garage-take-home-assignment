import type { ReactElement } from 'react'
import CalendarIcon from '@/components/icons/calendar-icon'
import UsersIcon from '@/components/icons/users-icon'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

export default function RequestCallCard({ className }: Props): ReactElement {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-2xl border border-neutral-200 bg-green-600',
                className
            )}
        >
            <div className="relative z-10">
                <div className="rounded-b-2xl bg-white p-6 shadow-xl">
                    <p className="mb-1 text-base/normal font-medium text-black">
                        Request a virtual walk around
                    </p>
                    <p className="mb-4 text-sm/normal font-light leading-snug tracking-wide text-neutral-500">
                        Want to see this listing on a video call? Request a
                        virtual inspection to schedule a time to speak with the
                        owner.
                    </p>
                    <div className="w-full">
                        <button className="transition-hoseflow flex w-full cursor-pointer items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3.5 py-2 text-base/normal font-medium text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99]">
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            Schedule video call
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-2 px-6 py-3">
                    <UsersIcon className="h-5 w-5 fill-white/75" />
                    <p className="text-sm/normal font-light tracking-wide text-black text-white/75">
                        Speak directly with the seller
                    </p>
                </div>
            </div>
        </div>
    )
}
