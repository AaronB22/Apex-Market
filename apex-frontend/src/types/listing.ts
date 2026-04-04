export interface Listing {
  id: number;
  name: string;
  owner: string;
  price: number;
  description?: string;
  image_url?: string;
}