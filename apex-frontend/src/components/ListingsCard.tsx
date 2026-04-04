import type { Listing } from "../types/listing";

type ListingsCardProps = {
  list: Listing;
};

export default function ListibgsCard({ list }: ListingsCardProps) {
  return (
    <article>
      <h2>
        {list.name}
      </h2>
      <p>Price: ${list.price.toLocaleString()}</p>
      <p>{list.description}</p>
    </article>
  );
}