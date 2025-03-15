"use client";

type CardProps = {
  activity: string;
  price: number;
  type: string;
  accessibility: number;
  bookingRequired: boolean;
  onDelete: () => void;
};

export default function Card({ activity, price, type, accessibility, bookingRequired, onDelete }: CardProps) {
	// Capitalize first letter in Type
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="border m-4 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{activity}</h2>
        <p>Price: ${price}</p>
        <p>Type: {capitalizeFirstLetter(type)}</p>
        <p>Accessibility: {accessibility}</p>
        <p>Booking Required: {bookingRequired ? "Yes" : "No"}</p>
      </div>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}
