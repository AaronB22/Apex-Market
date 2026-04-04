import type { Car } from "../types/car";

const API_URL = "http://localhost:3000/api/cars";

export async function getCars(): Promise<Car[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch cars");
    }

    return (await response.json()) as Car[];
}