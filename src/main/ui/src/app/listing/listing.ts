export interface Listing {
    id: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    price: number;
    bathrooms: number;
    bedrooms: number;
    centralHeating: boolean;
    centralCooling: boolean;
    garage: boolean;
    squareFootage: number;
    listingDate: Date;
    status: string;
    schoolArea: string;
    images:Images[];
}

export interface Images {
    id: number;
    imageFilePath: string;
}