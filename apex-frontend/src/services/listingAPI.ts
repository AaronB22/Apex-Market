import type { Listing } from "../types/listing";

const API_URL = "http://localhost:3000/api/listings";

export async function getListings(): Promise<Listing[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch listings");
    }

    return (await response.json()) as Listing[];
}