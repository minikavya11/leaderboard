import React from "react";
import { FaCrown } from "react-icons/fa";

const ranks = [
  { label: "1st", color: "text-yellow-500", bg: "bg-yellow-100" },
  { label: "2nd", color: "text-gray-400", bg: "bg-gray-100" },
  { label: "3rd", color: "text-orange-400", bg: "bg-orange-100" },
];

export default function TopThree({ users }) {
  const topThree = [...users]
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-center text-indigo-600">
        👑 Top 3 Legends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {topThree.map((user, index) => (
          <div
            key={user._id}
            className={`rounded-xl p-4 shadow-lg flex flex-col items-center ${ranks[index].bg}`}
          >
            <FaCrown size={32} className={`${ranks[index].color} mb-1`} />
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
           <p className="text-sm text-gray-600 mt-1">
  ⭐ {user.totalPoints} points
</p>

            <p className="text-xs text-gray-500 mt-1">Rank: {ranks[index].label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
