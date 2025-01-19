interface Listing {
    id: string
    createdAt: string
    updatedAt: string
    listingTitle: string
    sellingPrice: number
    imageUrls: string[]
    listingStatus: number
    tags: string[]
    categories: number[]
    itemBrand: string
    listingDescription: string
    itemAge: number | null
    itemLength: number
    itemWidth: number
    itemHeight: number
    itemWeight: number
    addressState: string
    mileage: number | null
    hasServiceRecords: boolean | null
    hasRust: boolean | null
    isFourWheelDrive: boolean | null
    tankSize: number | null
    pumpSize: number | null
    hasPumpTest: boolean | null
    aerialLength: number | null
    isAuction: boolean | null
    expirationDate: string | null
    finalPrice: number | null
    vin: string | null
    userId: string
}

interface ListingPageProps {
    params: Promise<{ listingId: string }>
}

export default async function Listing({ params }: ListingPageProps) {
    const listingId = (await params).listingId

    const response = await fetch(
        `https://garage-backend.onrender.com/listings/${listingId}`
    )
    const listing: Listing = await response.json()

    return JSON.stringify(listing)
}
