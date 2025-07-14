import { useState } from "react";
import API from "../api/api";

export default function AddUser({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    if (!name) return;
    await API.post("/users", { name });
    setName("");
    onAdd();
  };

  return (
    <div className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add user..."
        className="border p-2 rounded"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
}
