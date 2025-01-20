export interface User {
    id: string
    displayName: string
    addressState: string
}

export interface Listing {
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

export interface ListingPreview
    extends Pick<
        Listing,
        | 'id'
        | 'listingTitle'
        | 'sellingPrice'
        | 'listingStatus'
        | 'tags'
        | 'categories'
        | 'mileage'
        | 'tankSize'
        | 'pumpSize'
        | 'isFourWheelDrive'
        | 'isAuction'
        | 'expirationDate'
    > {
    imageUrl: string
}
