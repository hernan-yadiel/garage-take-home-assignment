import type { ReactElement } from 'react';
import type { ListingPreview } from '../types';
import ListingImageCarousel from './listing-image-carousel';
import { simulateNetworkDelay } from '../_utils/simulate-network-delay';

interface Props {
  currentListingId: string;
}

export default async function RelatedListing({
  currentListingId,
}: Props): Promise<ReactElement> {
  const relatedListingsResponse = await fetch(
    `${process.env.API_URL}/listings/related/${currentListingId}`
  );

  await simulateNetworkDelay(3000);

  const relatedListings: { listingPreviews: ListingPreview[] } =
    await relatedListingsResponse.json();

  const relatedListingsImageUrls: string[] =
    relatedListings.listingPreviews.map((listing) => listing.imageUrl);

  return (
    <div className="w-full">
      <h3 className="mb-4 text-xl font-bold">Related Listings</h3>
      <ListingImageCarousel
        imageUrls={relatedListingsImageUrls}
        slidesPerView={3}
      />
    </div>
  );
}
