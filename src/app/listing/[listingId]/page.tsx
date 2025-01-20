import ListingImageCarousel from './_components/listing-image-carousel';
import Seller from './_components/seller';
import getStateName from './_utils/getStateName';
import Separator from '@/components/separator';
import CallToActionCard from './_components/call-to-action-card';
import MoreActionsCard from './_components/more-actions-card';
import RequestCallCard from './_components/request-call-card';
import ProductDetails from './_components/product-details';
import ListingDescription from './_components/listing-description';
import type { Listing, User } from './types';
import { Suspense } from 'react';
import RelatedListing from './_components/related-listing';
// import { simulateNetworkDelay } from './_utils/simulate-network-delay';

interface ListingPageProps {
  params: Promise<{ listingId: string }>;
}

export default async function Listing({ params }: ListingPageProps) {
  const listingId = (await params).listingId;

  const listingResponse = await fetch(
    `${process.env.API_URL}/listings/${listingId}`
  );
  const listing: Listing = await listingResponse.json();

  const userResponse = await fetch(
    `${process.env.API_URL}/users/${listing.userId}`
  );
  const user: User = await userResponse.json();

  // Turn this on to test loading state of this component
  // await simulateNetworkDelay(2000);

  return (
    <>
      <div className="mx-auto mt-6 max-w-screen-xl px-6">
        <div className="flex gap-8">
          <div id="listing carousel">
            <div className="h-[500px] w-[700px]">
              <ListingImageCarousel
                imageUrls={listing.imageUrls}
                slidesPerView={1}
              />
            </div>
            <Separator variant="end-faded" className="mt-6" />
            <ProductDetails
              hasServiceRecords={listing.hasServiceRecords}
              hasPumpTest={listing.hasPumpTest}
              pumpSize={listing.pumpSize}
              mileage={listing.mileage}
              tankSize={listing.tankSize}
              itemLength={listing.itemHeight}
              itemAge={listing.itemAge}
              itemBrand={listing.itemBrand}
              itemHeight={listing.itemWeight}
            />
            <Separator variant="end-faded" className="my-6" />
            <ListingDescription description={listing.listingDescription} />
          </div>
          <div>
            <h1 className="font-sans text-3xl font-bold">
              {listing.listingTitle}
            </h1>
            <p className="font-sans text-base font-light">
              Located in {getStateName(listing.addressState)} <span> • </span>{' '}
              Ships nationwide
            </p>
            <Separator variant="end-faded" className="mt-3" />
            <Seller
              addressState={listing.addressState}
              displayName={user.displayName}
              isVerified={true}
            />
            <Separator variant="end-faded" className="mb-3" />
            <CallToActionCard
              className="mb-3"
              sellingPrice={listing.sellingPrice}
            />
            <MoreActionsCard />
            <RequestCallCard className="mt-3" />
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      <Suspense fallback={<p className="text-xl font-bold">Loading...</p>}>
        <RelatedListing currentListingId={listingId} />
      </Suspense>
    </>
  );
}
