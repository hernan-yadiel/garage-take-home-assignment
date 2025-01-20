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

export default function CTACard({
  sellingPrice,
  className,
}: Props): ReactElement {
  const formattedSellingPrice = formatCurrency(sellingPrice);
  return (
    <Card className={cn(className)}>
      <div className="p-6">
        <h3 className="mb-1 text-xl/normal font-medium text-black md:text-2xl/normal">
          {formattedSellingPrice}
        </h3>
        <p className="text-base/normal font-light tracking-wide text-neutral-500">
          Freight, financing, and warranty available
        </p>
        <Separator className="my-3" />
        <div className="flex flex-col gap-3">
          <Button size="lg" variant="cta">
            {sellingPrice > 10000 ? 'Contact Seller' : 'Buy now'}
          </Button>
          <Button size="lg" variant="outline">
            Make Offer
          </Button>
          <Button size="lg" variant="outline">
            Add to watchlist
          </Button>
        </div>
      </div>
    </Card>
  );
}
