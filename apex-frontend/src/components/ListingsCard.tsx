import type { Listing } from "../types/listing";
import "./ListingsCard.css";

type ListingsCardProps = {
  listing: Listing;
};

export default function ListibgsCard({ listing }: ListingsCardProps) {
  return (
    <article className="listing-card">
      <div className="listing-card__image-wrapper">
        {listing.image_url ? (
          <img
            src={listing.image_url}
            alt={listing.title}
            className="listing-card__image"
          />
        ) : (
          <div className="listing-card__placeholder">No Image</div>
        )}
      </div>

      <div className="listing-card__content">
        <p className="listing-card__price">
          ${listing.price.toLocaleString()}
        </p>

        <h2 className="listing-card__title">{listing.title}</h2>

        <p className="listing-card__owner">Listed by {listing.owner}</p>

        {listing.description && (
          <p className="listing-card__description">{listing.description}</p>
        )}
      </div>
    </article>
  );
}