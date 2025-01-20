import { Card } from '@/components/ui/card';
import {
  FileTextIcon,
  LandmarkIcon,
  SendHorizonal,
  ShieldCheckIcon,
} from 'lucide-react';
import type { ReactElement } from 'react';

export default function MoreActionsCard(): ReactElement {
  return (
    <Card className="grid grid-cols-1 gap-[1px] divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 lg:grid-cols-2">
      <button className="flex w-full items-center space-x-4 text-balance bg-white p-4 font-medium text-neutral-900 hover:bg-neutral-50 hover:text-primary">
        <ShieldCheckIcon size={20} />
        <p>Warranty calculator</p>
      </button>
      <button className="flex w-full items-center space-x-4 text-balance bg-white p-4 font-medium text-neutral-900 hover:bg-neutral-50 hover:text-primary">
        <FileTextIcon size={20} />
        <p>Instant freight quote</p>
      </button>
      <button className="flex w-full items-center space-x-4 text-balance bg-white p-4 font-medium text-neutral-900 hover:bg-neutral-50 hover:text-primary">
        <LandmarkIcon size={20} />
        <p>Apply for financing options</p>
      </button>
      <button className="flex w-full items-center space-x-4 text-balance bg-white p-4 font-medium text-neutral-900 hover:bg-neutral-50 hover:text-primary">
        <SendHorizonal size={20} />
        <p>Get PDF invoice</p>
      </button>
    </Card>
  );
}
