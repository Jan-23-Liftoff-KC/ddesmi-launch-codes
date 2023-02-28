import { Listing } from "../listing/listing";

export interface Collection {
    id:number,
    name: string,
    note: string,
    listings: Listing[];
}