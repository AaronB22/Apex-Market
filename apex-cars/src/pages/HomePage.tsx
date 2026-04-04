import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { getCars } from "../services/carApi";
import type { Car } from "../types/car";

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCars() {
      try {
        const data = await getCars();
        setCars(data);
      } catch (err) {
        setError("Failed to load cars");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  if (loading) {
    return <main><p>Loading cars...</p></main>;
  }

  if (error) {
    return <main><p>{error}</p></main>;
  }

  return (
    <main>
      <h1>Apex Cars</h1>
      <p>Browse available vehicles</p>

      <section>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  );
}