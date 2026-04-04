import type { Car } from "../types/car";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <article>
      <h2>
        {car.year} {car.make} {car.model}
      </h2>
      <p>Price: ${car.price.toLocaleString()}</p>
      <p>Mileage: {car.mileage.toLocaleString()} miles</p>
      <p>{car.description}</p>
    </article>
  );
}