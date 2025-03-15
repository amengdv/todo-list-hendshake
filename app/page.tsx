"use client";

import Card from "@/components/Card";
import { useEffect, useState } from "react";

type CardDto = {
  activity: string;
  price: number;
  type: string;
  accessibility: number;
  bookingRequired: boolean;
}

export default function Home() {
  // Store Card Data
  const [cards, setCards] = useState<CardDto[]>([]);
  const [loading, setLoading] = useState(true);

  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("education");
  const [accessibility, setAccessibility] = useState(0.5);
  const [bookingRequired, setBookingRequired] = useState(false);

  // Get cards from local storage
  useEffect(() => {
    try {
      const savedCards = localStorage.getItem("cards");
      console.log("Retrieved from localStorage:", savedCards);
      
      if (savedCards && savedCards !== "undefined") {
        const parsedCards = JSON.parse(savedCards);
        console.log("Parsed cards:", parsedCards);
        setCards(parsedCards);
      }
    } catch (error) {
      console.error("Error loading cards from localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save cards to local storage
  useEffect(() => {
    if (!loading) {
      try {
        console.log("Saving to localStorage:", cards);
        localStorage.setItem("cards", JSON.stringify(cards));
      } catch (error) {
        console.error("Error saving cards to localStorage:", error);
      }
    }
  }, [cards, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard: CardDto = { activity, price, type, accessibility, bookingRequired };
		
		// Functional Update for cards
    setCards(prevCards => {
      const updatedCards = [...prevCards, newCard];
      return updatedCards;
    });

    // Reset input
    setActivity("");
    setPrice(0);
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <div className="flex min-h-screen items-start justify-start p-4 gap-8">
      {/* Form Section */}
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 border rounded-lg shadow-lg">
          <label>Activity:</label>
          <input
            type="text"
            value={activity}
            placeholder="Activity"
            onChange={(e) => setActivity(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <label>Price:</label>
          <input
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border p-2 rounded"
          />

          <label>Type:</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            className="border p-2 rounded"
          >
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">Diy</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>

          <label>Booking Required:</label>
          <input 
            type="checkbox"
            checked={bookingRequired}
            onChange={(e) => setBookingRequired(e.target.checked)}
          />

          <label>Accessibility:</label>
          <input
            type="range"
            min="0.0"
            max="1.0"
            step="0.1"
            value={accessibility}
            onChange={(e) => setAccessibility(parseFloat(e.target.value))}
          />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </form>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-md">
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card, index) => (
            <Card
              key={index}
              activity={card.activity}
              price={card.price}
              type={card.type}
              accessibility={card.accessibility}
              bookingRequired={card.bookingRequired}
              onDelete={() => {}}
            />
          ))
        )}  
      </div>
    </div>
  );
}
