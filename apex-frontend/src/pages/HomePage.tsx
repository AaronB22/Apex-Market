import { useEffect, useState } from "react";
import ListingCard from "../components/ListingsCard";
import { getListings } from "../services/listingAPI";
import type { Listing } from "../types/listing";

export default function HomePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadListings() {
      try {
        const data = await getListings();
        setListings(data);
      } catch (err) {
        setError("Failed to load listing");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadListings();
  }, []);

  if (loading) {
    return <main><p>Loading listings...</p></main>;
  }

  if (error) {
    return <main><p>{error}</p></main>;
  }

  return (
    <main>
      <h1>Apex Cars</h1>
      <p>Browse available vehicles</p>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {listings.map((list) => (
          <ListingCard key={list.id} listing={list} />
        ))}
      </section>
    </main>
  );
}