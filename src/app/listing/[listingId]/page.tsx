import ListingHeader from './_components/listing-header';
import ListingImageCarousel from './_components/listing-image-carousel';
import Seller from './_components/seller';
import getStateName from './_utils/getStateName';
import Separator from '@/components/separator';
import CTACard from './_components/cta-card';
import MoreActionsCard from './_components/more-actions-card';
import RequestCallCard from './_components/request-call-card';
import ProductDetails from './_components/product-details';
import ListingDescription from './_components/listing-description';
import type { Listing, User } from './types';

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

  return (
    <>
      <ListingHeader />
      {/* Main container  */}
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
            <ProductDetails />
            <Separator variant="end-faded" className="my-6" />
            <ListingDescription description={listing.listingDescription} />
          </div>
          {/* Some Details */}
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
            <CTACard className="mb-3" sellingPrice={listing.sellingPrice} />
            <MoreActionsCard />
            <RequestCallCard className="mt-3" />
          </div>
        </div>
      </div>
      <Separator className="my-3" />
    </>
  );
}
