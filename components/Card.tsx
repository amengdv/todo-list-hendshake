"use client";

type CardProps = {
  activity: string;
  price: number;
  type: string;
  accessibility: number;
  onDelete: () => void;
};

export default function Card({ activity, price, type, accessibility, onDelete }: CardProps) {
  return (
    <div className="border m-4 p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{activity}</h2>
        <p>Price: ${price}</p>
        <p>Type: {type}</p>
        <p>Accessibility: {accessibility}</p>
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

