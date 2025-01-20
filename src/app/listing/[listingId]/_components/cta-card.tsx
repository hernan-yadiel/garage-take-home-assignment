import Separator from '@/components/separator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { ReactElement } from 'react'

interface Props {
    sellingPrice: string
    className: string
}

export default function CTACard({
    sellingPrice,
    className,
}: Props): ReactElement {
    return (
        <Card className={cn(className)}>
            <div className="p-6">
                <h3 className="mb-1 text-xl/normal font-medium text-black md:text-2xl/normal">
                    {sellingPrice}
                </h3>
                <p className="text-base/normal font-light tracking-wide text-neutral-500">
                    Freight, financing, and warranty available
                </p>
                <Separator className="my-3" />
                <div className="flex flex-col gap-3">
                    <Button size="cta">Contact Seller</Button>
                    <Button size="cta" variant="secondary">
                        Make Offer
                    </Button>
                    <Button size="cta" variant="secondary">
                        Add to watchlist
                    </Button>
                </div>
                <Separator className="my-3" />
            </div>
        </Card>
    )
}
