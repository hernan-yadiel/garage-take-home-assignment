import Separator from '@/components/separator';
import { ArrowLeftIcon, HeartIcon, Share2Icon } from 'lucide-react';
import Link from 'next/link';
import type { ReactElement } from 'react';

export default function ListingHeader(): ReactElement {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between space-x-6 px-6">
        <div className="flex gap-1 py-6 hover:text-primary">
          <ArrowLeftIcon />
          <Link className="font-medium" href="/">
            Back
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="flex cursor-pointer gap-1 hover:text-primary">
            <Share2Icon /> <span>Share</span>
          </div>
          <div className="flex cursor-pointer gap-1 hover:text-primary">
            <HeartIcon />
            <span>Save</span>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
