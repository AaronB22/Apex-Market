export interface Listing {
  id: number;
  title: string;
  owner: string;
  price: number;
  description?: string;
  image_url?: string;
}