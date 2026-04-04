import type { Listing } from "./listing";

export interface Car extends Listing{
  make: string;
  model: string;
  year: number;
  mileage: number;
}