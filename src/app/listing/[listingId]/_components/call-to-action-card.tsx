import Separator from '@/components/separator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ReactElement } from 'react';
import { formatCurrency } from '../_utils/formatCurrency';

interface Props {
  sellingPrice: number;
  className: string;
}

export default function CallToActionCard({
  sellingPrice,
  className,
}: Props): ReactElement {
  const priceLabel = formatCurrency(sellingPrice);
  const priceExceedsThreshold = sellingPrice > 10000;

  return (
    <Card className={cn(className)}>
      <div className="p-6">
        <h3 className="mb-1 text-xl/normal font-medium text-black md:text-2xl/normal">
          {priceLabel}
        </h3>
        <p className="text-base/normal font-light tracking-wide text-neutral-500">
          Freight, financing, and warranty available
        </p>
        <Separator className="my-3" />
        <div className="flex flex-col gap-3">
          <Button size="lg" variant="cta">
            {priceExceedsThreshold ? 'Contact Seller' : 'Buy now'}
          </Button>
          <Button size="lg" variant="outline">
            Make Offer
          </Button>
          {!priceExceedsThreshold && (
            <Button size="lg" variant="outline">
              Contact Seller
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
