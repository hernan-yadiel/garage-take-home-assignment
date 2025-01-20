import { CircleCheckIcon } from 'lucide-react'
import Image from 'next/image'
import type { ReactElement } from 'react'

interface Props {
    addressState: string
    displayName: string
    isVerified?: boolean
}

export default function Seller({
    addressState,
    displayName,
    isVerified = false,
}: Props): ReactElement {
    return (
        <div className="flex items-start space-x-6 py-4">
            <div className="relative flex-shrink-0">
                <CircleCheckIcon
                    className="absolute -bottom-1 -right-2 h-6 w-6 rounded-full bg-green-500 shadow-xl"
                    color="#ffffff"
                />
                <Image
                    src={`/states/${addressState.toLowerCase()}.png`}
                    alt="Seller profile picture"
                    className="h-12 w-12 rounded-full border border-neutral-200 object-cover"
                    width={64}
                    height={64}
                />
            </div>
            <div>
                <p className="text-base/normal font-medium text-black">
                    Listed by {displayName}
                </p>
                {isVerified && (
                    <p className="text-base/normal font-light tracking-wide text-black">
                        Verified seller
                    </p>
                )}
            </div>
        </div>
    )
}
