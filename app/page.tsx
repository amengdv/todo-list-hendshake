export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-start mx-8">
      <form className="flex flex-col gap-4 p-6 border rounded-lg shadow-lg">
        <label>Activity:</label>
        <input type="text" placeholder="Activity" className="border p-2 rounded" />

        <label>Price:</label>
        <input type="number" placeholder="Price" className="border p-2 rounded" />

        <label>Type:</label>
        <select name="Type" className="border p-2 rounded">
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
        <input type="checkbox" />

        <label>Accessibility:</label>
        <input type="range" min="0.0" max="1.0" step="0.1" />

        <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

